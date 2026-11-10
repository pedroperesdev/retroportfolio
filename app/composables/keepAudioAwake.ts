// plays an inaudible tone while active, so the device never sleeps (like music playing in the background).

let ctx: AudioContext | null = null;

export function startKeepAudioAwake() {
    if (ctx) return;
    ctx = new AudioContext();
    const tone = ctx.createOscillator();
    const volume = ctx.createGain();
    volume.gain.value = 0.0001;
    tone.connect(volume).connect(ctx.destination);
    tone.start();
}

export function stopKeepAudioAwake() {
    ctx?.close();
    ctx = null;
}
