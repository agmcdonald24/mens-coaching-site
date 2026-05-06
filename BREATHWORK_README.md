# Coherent Breath Timer - Python Version

A breathwork timer application with alternating breath cycles and gong sounds.

## Features

- Configurable duration (1-30 minutes)
- Adjustable breath interval (3-10 seconds)
- Volume control
- Visual "Breathe In" / "Breathe Out" animation
- Alternating gong sounds for each breath cycle

## Requirements

Install the required Python packages:

```bash
pip install pygame
```

Note: `tkinter` comes pre-installed with most Python distributions.

## Sound Files

The timer expects two sound files:
- `Gong1.wav` - Played on "Breathe In"
- `Gong2.wav` - Played on "Breathe Out"

Place these files in either:
- `sounds/` directory, or
- `public/sounds/` directory (same as the website)

The timer will work without sound files but will print a warning.

## Running the Timer

```bash
python3 breathwork_timer.py
```

Or make it executable:

```bash
chmod +x breathwork_timer.py
./breathwork_timer.py
```

## Usage

1. Select your desired duration (in minutes)
2. Choose the breath interval (in seconds) - 6 seconds is recommended for coherent breathing
3. Adjust the volume to your preference
4. Click "Start" to begin
5. Follow the "Breathe In" / "Breathe Out" prompts
6. Click "Stop" to end the session early

## Coherent Breathing

Coherent breathing typically uses a 6-second interval (6 seconds in, 6 seconds out) for a rate of 5 breaths per minute, which is associated with optimal heart rate variability and relaxation.
