#!/usr/bin/env python3
"""
Simple terminal-based coherent breathwork timer
"""

import pygame
import time
import sys
import os
from pathlib import Path


def clear_line():
    """Clear the current terminal line"""
    sys.stdout.write('\r')
    sys.stdout.write('\033[K')
    sys.stdout.flush()


def format_time(seconds):
    """Format seconds as MM:SS"""
    mins = seconds // 60
    secs = seconds % 60
    return f"{mins:02d}:{secs:02d}"


def run_breathwork_timer(duration_minutes=5, interval_seconds=6, volume=0.4):
    """
    Run the breathwork timer

    Args:
        duration_minutes: Total duration in minutes (default: 5)
        interval_seconds: Breath interval in seconds (default: 6)
        volume: Volume level 0.0-1.0 (default: 0.4)
    """
    # Initialize pygame mixer
    pygame.mixer.init()

    # Load sound files
    sounds_dir = Path("public/sounds")
    if not sounds_dir.exists():
        sounds_dir = Path("sounds")

    gong1_path = sounds_dir / "Gong1.wav"
    gong2_path = sounds_dir / "Gong2.wav"

    if not (gong1_path.exists() and gong2_path.exists()):
        print(f"Error: Sound files not found in {sounds_dir}")
        print("Place Gong1.wav and Gong2.wav in 'sounds' or 'public/sounds' directory")
        return

    gong1 = pygame.mixer.Sound(str(gong1_path))
    gong2 = pygame.mixer.Sound(str(gong2_path))
    gong1.set_volume(volume)
    gong2.set_volume(volume)

    # Calculate total time
    total_seconds = duration_minutes * 60

    print(f"\nCoherent Breath Timer")
    print(f"Duration: {duration_minutes} minutes")
    print(f"Interval: {interval_seconds} seconds")
    print(f"Volume: {int(volume * 100)}%")
    print(f"\nStarting in 3 seconds...\n")
    time.sleep(3)

    # Start timer
    start_time = time.time()
    elapsed = 0
    breath_state = "in"
    last_breath_time = start_time

    # Play first gong
    gong1.play()

    try:
        while elapsed < total_seconds:
            current_time = time.time()
            elapsed = int(current_time - start_time)
            remaining = total_seconds - elapsed

            # Check if it's time to switch breath state
            time_since_breath = current_time - last_breath_time
            if time_since_breath >= interval_seconds:
                breath_state = "out" if breath_state == "in" else "in"
                last_breath_time = current_time

                # Play appropriate gong
                if breath_state == "in":
                    gong1.play()
                else:
                    gong2.play()

            # Display status
            breath_text = "BREATHE IN" if breath_state == "in" else "breathe out"
            clear_line()
            sys.stdout.write(f"⏱  {format_time(remaining)} remaining  |  {breath_text}")
            sys.stdout.flush()

            time.sleep(0.1)

        # Timer complete
        clear_line()
        print(f"✓ Session complete! ({duration_minutes} minutes)\n")

    except KeyboardInterrupt:
        clear_line()
        print(f"\n✗ Session stopped early (completed {format_time(elapsed)})\n")

    pygame.mixer.quit()


def main():
    """Main entry point"""
    # Default values
    duration = 5
    interval = 6
    volume = 0.4

    # Parse command line arguments if provided
    if len(sys.argv) > 1:
        try:
            duration = int(sys.argv[1])
        except ValueError:
            print("Usage: python3 breathwork.py [duration_minutes] [interval_seconds] [volume]")
            print("Example: python3 breathwork.py 10 6 0.5")
            sys.exit(1)

    if len(sys.argv) > 2:
        try:
            interval = int(sys.argv[2])
        except ValueError:
            print("Error: Interval must be an integer")
            sys.exit(1)

    if len(sys.argv) > 3:
        try:
            volume = float(sys.argv[3])
            if not 0 <= volume <= 1:
                print("Error: Volume must be between 0 and 1")
                sys.exit(1)
        except ValueError:
            print("Error: Volume must be a number between 0 and 1")
            sys.exit(1)

    run_breathwork_timer(duration, interval, volume)


if __name__ == "__main__":
    main()
