#!/usr/bin/env python3
"""
Coherent Breath Timer
A breathwork timer with alternating breath cycles and gong sounds.
"""

import tkinter as tk
from tkinter import ttk
import pygame
import threading
import time
from pathlib import Path


class BreathworkTimer:
    def __init__(self, root):
        self.root = root
        self.root.title("Coherent Breath Timer")
        self.root.geometry("600x700")
        self.root.configure(bg="#f5f2eb")

        # Initialize pygame mixer for audio
        pygame.mixer.init()

        # Timer state
        self.duration = tk.IntVar(value=5)  # minutes
        self.interval = tk.IntVar(value=6)  # seconds
        self.volume = tk.DoubleVar(value=0.4)
        self.is_running = False
        self.current_time = 0
        self.breath_state = "in"
        self.timer_thread = None
        self.breath_thread = None
        self.stop_flag = False

        # Load sounds
        self.load_sounds()

        # Create UI
        self.create_ui()

    def load_sounds(self):
        """Load gong sound files"""
        try:
            # Try to load from public/sounds directory
            sounds_dir = Path("public/sounds")
            if not sounds_dir.exists():
                sounds_dir = Path("sounds")

            gong1_path = sounds_dir / "Gong1.wav"
            gong2_path = sounds_dir / "Gong2.wav"

            if gong1_path.exists() and gong2_path.exists():
                self.gong1 = pygame.mixer.Sound(str(gong1_path))
                self.gong2 = pygame.mixer.Sound(str(gong2_path))
                self.sounds_loaded = True
            else:
                print(f"Warning: Sound files not found in {sounds_dir}")
                print("Place Gong1.wav and Gong2.wav in 'sounds' or 'public/sounds' directory")
                self.sounds_loaded = False
        except Exception as e:
            print(f"Error loading sounds: {e}")
            self.sounds_loaded = False

    def create_ui(self):
        """Create the user interface"""
        # Main container
        main_frame = tk.Frame(self.root, bg="white", padx=40, pady=40)
        main_frame.pack(expand=True, fill="both", padx=20, pady=20)

        # Title
        title = tk.Label(
            main_frame,
            text="Coherent Breath Timer",
            font=("Arial", 32, "bold"),
            bg="white",
            fg="#141e46"
        )
        title.pack(pady=(0, 30))

        # Duration selector
        duration_frame = tk.Frame(main_frame, bg="white")
        duration_frame.pack(fill="x", pady=10)

        tk.Label(
            duration_frame,
            text="Select duration (in minutes):",
            font=("Arial", 12),
            bg="white",
            fg="#333"
        ).pack(side="left")

        self.duration_selector = ttk.Combobox(
            duration_frame,
            textvariable=self.duration,
            values=[1, 5, 10, 15, 20, 25, 30],
            state="readonly",
            width=10,
            font=("Arial", 12)
        )
        self.duration_selector.pack(side="right")

        # Interval selector
        interval_frame = tk.Frame(main_frame, bg="white")
        interval_frame.pack(fill="x", pady=10)

        tk.Label(
            interval_frame,
            text="Select interval duration (in seconds):",
            font=("Arial", 12),
            bg="white",
            fg="#333"
        ).pack(side="left")

        self.interval_selector = ttk.Combobox(
            interval_frame,
            textvariable=self.interval,
            values=[3, 4, 5, 6, 7, 8, 9, 10],
            state="readonly",
            width=10,
            font=("Arial", 12)
        )
        self.interval_selector.pack(side="right")

        # Volume control
        volume_frame = tk.Frame(main_frame, bg="white")
        volume_frame.pack(fill="x", pady=20)

        tk.Label(
            volume_frame,
            text="Volume",
            font=("Arial", 12),
            bg="white",
            fg="#333"
        ).pack()

        self.volume_slider = tk.Scale(
            volume_frame,
            from_=0,
            to=1,
            resolution=0.1,
            orient="horizontal",
            variable=self.volume,
            command=self.update_volume,
            bg="white",
            highlightthickness=0,
            length=400
        )
        self.volume_slider.pack(pady=10)

        # Buttons
        button_frame = tk.Frame(main_frame, bg="white")
        button_frame.pack(pady=20)

        self.start_button = tk.Button(
            button_frame,
            text="Start",
            font=("Arial", 14, "bold"),
            bg="white",
            fg="#2563eb",
            activebackground="#2563eb",
            activeforeground="white",
            relief="solid",
            borderwidth=2,
            padx=30,
            pady=10,
            command=self.start_timer,
            cursor="hand2"
        )
        self.start_button.pack(side="left", padx=5)

        self.stop_button = tk.Button(
            button_frame,
            text="Stop",
            font=("Arial", 14, "bold"),
            bg="white",
            fg="#666",
            activebackground="#f3f4f6",
            relief="solid",
            borderwidth=2,
            padx=30,
            pady=10,
            command=self.stop_timer,
            state="disabled",
            cursor="hand2"
        )
        self.stop_button.pack(side="left", padx=5)

        # Timer display
        self.timer_label = tk.Label(
            main_frame,
            text="00:00",
            font=("Arial", 48, "bold"),
            bg="white",
            fg="#333"
        )
        self.timer_label.pack(pady=20)

        # Breath animation
        self.breath_label = tk.Label(
            main_frame,
            text="Breathe In",
            font=("Arial", 36, "bold"),
            bg="white",
            fg="#141e46"
        )
        self.breath_label.pack(pady=40)
        self.breath_label.config(fg="#999")  # Start dimmed

    def update_volume(self, *args):
        """Update the volume of gong sounds"""
        if self.sounds_loaded:
            vol = self.volume.get()
            self.gong1.set_volume(vol)
            self.gong2.set_volume(vol)

    def play_gong(self, gong_number):
        """Play the specified gong sound"""
        if not self.sounds_loaded:
            return

        try:
            if gong_number == 1:
                self.gong1.play()
            else:
                self.gong2.play()
        except Exception as e:
            print(f"Error playing gong: {e}")

    def format_time(self, seconds):
        """Format seconds as MM:SS"""
        mins = seconds // 60
        secs = seconds % 60
        return f"{mins:02d}:{secs:02d}"

    def start_timer(self):
        """Start the breathwork timer"""
        if self.is_running:
            return

        self.is_running = True
        self.stop_flag = False
        self.current_time = 0
        self.breath_state = "in"

        # Update UI
        self.start_button.config(state="disabled")
        self.stop_button.config(state="normal")
        self.duration_selector.config(state="disabled")
        self.interval_selector.config(state="disabled")
        self.breath_label.config(fg="#141e46")

        # Play first gong
        self.play_gong(1)

        # Start timer thread
        self.timer_thread = threading.Thread(target=self.run_timer, daemon=True)
        self.timer_thread.start()

        # Start breath cycle thread
        self.breath_thread = threading.Thread(target=self.run_breath_cycle, daemon=True)
        self.breath_thread.start()

    def stop_timer(self):
        """Stop the breathwork timer"""
        self.is_running = False
        self.stop_flag = True

        # Update UI
        self.start_button.config(state="normal")
        self.stop_button.config(state="disabled")
        self.duration_selector.config(state="readonly")
        self.interval_selector.config(state="readonly")
        self.current_time = 0
        self.timer_label.config(text="00:00")
        self.breath_state = "in"
        self.breath_label.config(text="Breathe In", fg="#999")

    def run_timer(self):
        """Run the timer countdown"""
        total_seconds = self.duration.get() * 60

        while self.is_running and self.current_time < total_seconds:
            if self.stop_flag:
                break

            time.sleep(1)
            self.current_time += 1

            # Update timer display
            self.root.after(0, lambda: self.timer_label.config(
                text=self.format_time(self.current_time)
            ))

        if not self.stop_flag and self.current_time >= total_seconds:
            self.root.after(0, self.stop_timer)

    def run_breath_cycle(self):
        """Run the breath cycle animation and sounds"""
        interval_seconds = self.interval.get()

        while self.is_running:
            if self.stop_flag:
                break

            time.sleep(interval_seconds)

            if self.stop_flag:
                break

            # Toggle breath state
            self.breath_state = "out" if self.breath_state == "in" else "in"

            # Update breath label with animation
            text = "Breathe In" if self.breath_state == "in" else "Breathe Out"
            font_size = 36 if self.breath_state == "in" else 28

            self.root.after(0, lambda: self.breath_label.config(
                text=text,
                font=("Arial", font_size, "bold")
            ))

            # Play gong
            gong_num = 1 if self.breath_state == "in" else 2
            self.play_gong(gong_num)


def main():
    root = tk.Tk()
    app = BreathworkTimer(root)
    root.mainloop()


if __name__ == "__main__":
    main()
