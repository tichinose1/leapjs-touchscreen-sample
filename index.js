const controller = new Leap.Controller();
controller.connect();

controller.on('frame', frame => {
    const hand = frame.hands[0];
    if (!hand) return;

    const finger = hand.fingers[0];
    if (!finger) return;

    console.log(`finger.type: ${finger.type}`);
    console.log(`finger.dipPosition: ${finger.dipPosition}`);
});
