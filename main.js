const controller = new Leap.Controller();
controller.connect();

controller.on('frame', frame => {
    const hand = frame.hands[0];
    if (!hand) return;

    const finger = hand.fingers[1];
    if (!finger) return;

    console.log(`finger.type: ${finger.type}, finger.dipPosition: ${finger.dipPosition}`);

    const guide = document.getElementById('guide');
    guide.style.left = document.documentElement.clientWidth / 2 + finger.dipPosition[0] - guide.width + 'px';
    guide.style.top = document.documentElement.clientHeight - finger.dipPosition[1] - guide.height + 'px';
});
