# Coherent Breath Timer

Simple terminal-based breathwork timer with gong sounds.

## Setup

Install pygame:

```bash
pip install pygame
```

Sound files (Gong1.wav, Gong2.wav) should be in `public/sounds/` or `sounds/` directory.

## Usage

**Default** (5 minutes, 6 second intervals):
```bash
python3 breathwork.py
```

**Custom duration**:
```bash
python3 breathwork.py 10          # 10 minutes
```

**Custom duration and interval**:
```bash
python3 breathwork.py 15 5        # 15 minutes, 5 second intervals
```

**Custom duration, interval, and volume**:
```bash
python3 breathwork.py 20 6 0.7    # 20 minutes, 6 seconds, 70% volume
```

**Stop early**: Press `Ctrl+C`

## Examples

```bash
# Quick 1-minute session
python3 breathwork.py 1

# Standard coherent breathing (5 breaths/minute)
python3 breathwork.py 10 6

# Longer session with quieter volume
python3 breathwork.py 20 6 0.3
```

## GUI Version

For a graphical version with controls, use `breathwork_timer.py` instead.
