"use client";

import { useState, useEffect, useRef } from "react";

export default function BreathworkTimer() {
  const [duration, setDuration] = useState(5); // minutes
  const [interval, setInterval] = useState(6); // seconds
  const [volume, setVolume] = useState(0.4);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // seconds elapsed
  const [breathState, setBreathState] = useState<"in" | "out">("in");

  const gong1Ref = useRef<HTMLAudioElement | null>(null);
  const gong2Ref = useRef<HTMLAudioElement | null>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const breathIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio elements
  useEffect(() => {
    gong1Ref.current = new Audio("/sounds/gong1.wav");
    gong2Ref.current = new Audio("/sounds/gong2.wav");

    return () => {
      if (gong1Ref.current) gong1Ref.current.pause();
      if (gong2Ref.current) gong2Ref.current.pause();
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (gong1Ref.current) gong1Ref.current.volume = volume;
    if (gong2Ref.current) gong2Ref.current.volume = volume;
  }, [volume]);

  const playGong = (gongNumber: 1 | 2) => {
    const gong = gongNumber === 1 ? gong1Ref.current : gong2Ref.current;
    if (gong) {
      gong.currentTime = 0;
      gong.play();
    }
  };

  const startTimer = () => {
    setIsRunning(true);
    setCurrentTime(0);
    setBreathState("in");

    // Play first gong
    playGong(1);

    let elapsed = 0;
    let currentBreathState: "in" | "out" = "in";
    const totalSeconds = duration * 60;

    // Timer countdown
    intervalIdRef.current = setInterval(() => {
      elapsed += 1;
      setCurrentTime(elapsed);

      if (elapsed >= totalSeconds) {
        stopTimer();
      }
    }, 1000);

    // Breath cycles
    breathIntervalRef.current = setInterval(() => {
      currentBreathState = currentBreathState === "in" ? "out" : "in";
      setBreathState(currentBreathState);
      playGong(currentBreathState === "in" ? 1 : 2);

      if (elapsed >= totalSeconds) {
        stopTimer();
      }
    }, interval * 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    if (breathIntervalRef.current) clearInterval(breathIntervalRef.current);
    setCurrentTime(0);
    setBreathState("in");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[rgb(245,242,235)] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[rgb(20,30,70)] text-center mb-12">
          Coherent Breath Timer
        </h1>

        <div className="space-y-8">
          {/* Duration Selector */}
          <div className="flex items-center justify-between">
            <label className="text-lg text-gray-800">
              Select duration (in minutes):
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              disabled={isRunning}
              className="px-4 py-2 border-2 border-gray-300 rounded-md text-lg bg-white disabled:opacity-50"
            >
              {[1, 5, 10, 15, 20, 25, 30].map((min) => (
                <option key={min} value={min}>
                  {min}
                </option>
              ))}
            </select>
          </div>

          {/* Interval Selector */}
          <div className="flex items-center justify-between">
            <label className="text-lg text-gray-800">
              Select interval duration (in seconds):
            </label>
            <select
              value={interval}
              onChange={(e) => setInterval(Number(e.target.value))}
              disabled={isRunning}
              className="px-4 py-2 border-2 border-gray-300 rounded-md text-lg bg-white disabled:opacity-50"
            >
              {[3, 4, 5, 6, 7, 8, 9, 10].map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Volume Control */}
          <div className="space-y-2">
            <label className="text-lg text-gray-800 block text-center">
              Volume
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[rgb(37,99,235)]"
            />
          </div>

          {/* Start/Stop Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={startTimer}
              disabled={isRunning}
              className="px-8 py-3 bg-white border-2 border-[rgb(37,99,235)] text-[rgb(37,99,235)] rounded-md text-lg font-semibold hover:bg-[rgb(37,99,235)] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start
            </button>
            <button
              onClick={stopTimer}
              disabled={!isRunning}
              className="px-8 py-3 bg-white border-2 border-gray-400 text-gray-600 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Stop
            </button>
          </div>

          {/* Timer Display */}
          <div className="text-center text-4xl font-bold text-gray-800">
            {formatTime(currentTime)}
          </div>

          {/* Breath Animation */}
          <div className="flex items-center justify-center min-h-[150px]">
            <div
              className="text-center font-bold text-[rgb(20,30,70)] transition-all duration-1000 ease-in-out"
              style={{
                fontSize: breathState === "in" ? "3rem" : "2rem",
                opacity: isRunning ? 1 : 0.3,
              }}
            >
              {breathState === "in" ? "Breathe In" : "Breathe Out"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
