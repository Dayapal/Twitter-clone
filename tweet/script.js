const navItems = document.querySelectorAll('.nav-item');
      const contentContainers = document.querySelectorAll('.content-container');
      const middleContent = document.querySelector('main.middle-content');
        document.body.addEventListener("scroll", function (event) {
         middleContent.scroll(middleContent.scrollLeft,document.body.scrollTop)
        }, false);


      navItems.forEach(item => {
          item.addEventListener('click', function() {
            navItems.forEach(item => item.classList.remove('active'));
            contentContainers.forEach(container => container.style.display = 'none')
            this.classList.add('active');
            const target = this.getAttribute('data-target')
            document.querySelector('.'+target).style.display = 'block'
          });
      });

      // Set 'Posts' content as visible initially
    document.querySelector('.posts-content').style.display = 'block';
 function openEditForm() {
  document.getElementById('editProfileForm').style.display = 'block';
  document.getElementById('dimmedBackground').style.display = 'block';
  document.querySelector('.left-nav').classList.add('dimmed');
  document.querySelector('main.middle-content').classList.add('dimmed');
  document.querySelector('.right-nav').classList.add('dimmed');
  document.body.style.overflow = 'hidden';
}

function closeEditForm() {
  document.getElementById('editProfileForm').style.display = 'none';
  document.getElementById('dimmedBackground').style.display = 'none';
  document.querySelector('.left-nav').classList.remove('dimmed');
    document.querySelector('main.middle-content').classList.remove('dimmed');
  document.querySelector('.right-nav').classList.remove('dimmed');
  document.body.style.overflow = 'auto';
}

function previewCoverPhoto(event) {
    const coverPhoto = event.target.files[0];
    if (coverPhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
           document.querySelector('.cover-photo-edit').style.backgroundImage = `url(${e.target.result})`;
           document.querySelector('.cover-photo').style.backgroundImage = `url(${e.target.result})`;

        };
        reader.readAsDataURL(coverPhoto);
    }
}


function previewProfilePhoto(event) {
    const profilePhoto = event.target.files[0];
    if (profilePhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector('.profile-pic-edit').style.backgroundImage = `url(${e.target.result})`;
            document.querySelector('.profile-pic').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(profilePhoto);
    }
}

 function saveChanges() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;
    const website = document.getElementById('website').value;
    const profilePhotoSrc = document.querySelector('.profile-pic-edit').style.backgroundImage;
    const coverPhotoSrc = document.querySelector('.cover-photo-edit').style.backgroundImage;


    document.querySelector('.profile-name').textContent = name;
    document.querySelector('.profile-status').textContent = bio;
    document.querySelector('.profile-pic').style.backgroundImage = profilePhotoSrc;
    document.querySelector('.cover-photo').style.backgroundImage = coverPhotoSrc;

    closeEditForm();
}
 const followButtons = document.querySelectorAll('.follow-btn');

    followButtons.forEach(button => {
        button.addEventListener('click', function() {
           if(this.textContent === 'Follow'){
             this.textContent = 'Following';
           }
           else{
                this.textContent = 'Follow';
           }
        });
    });