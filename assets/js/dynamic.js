<script>
  document.addEventListener('DOMContentLoaded', function() {
    var images = [
      'assets/img/construction.jpg',
      'assets/img/network.jpg',
      'assets/img/cctv.jpg'
    ];

    var currentIndex = 0;
    var dynamicHeroImg = document.getElementById('dynamicHeroImg');

    function changeHeroImage() {
      dynamicHeroImg.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }

    // Call changeHeroImage() function to change the image source dynamically
    changeHeroImage();

    // Optionally, set an interval to change the image periodically
    setInterval(changeHeroImage, 5000); // Change image every 5 seconds
  });
</script>