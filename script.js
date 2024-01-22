<script>
    let sirenAudio = new Audio('path/to/siren-sound.mp3');
    let sirenPlaying = false;

    function toggleSiren() {
        if (sirenPlaying) {
            sirenAudio.pause();
        } else {
            sirenAudio.play();
        }
        sirenPlaying = !sirenPlaying;
    }
</script>
