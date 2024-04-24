function solve(band, album, song) {
    const FULL_ROTATION_TIME = 2.5;

    let duration = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(duration / FULL_ROTATION_TIME);

    console.log(`The plate was rotated ${rotations} times.`)
}
