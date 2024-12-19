function getRandomName() {
    const names = ["Alice Smith", "Bob Johnson", "Charlie Brown", "Diana Miller", "Ethan Davis", "Fiona Wilson"];
    return names[Math.floor(Math.random() * names.length)];
  }
  document.getElementById('randomProfileName').innerText = getRandomName();
  function openEditForm() {
    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('dimmedBackground').style.display = 'block';
    document.getElementById('sideNavLeft').style.filter = 'brightness(0.4)';
    document.getElementById('mainContent').style.filter = 'brightness(0.4)';
    document.getElementById('sideNavRight').style.filter = 'brightness(0.4)';
    document.body.style.overflow = 'hidden';
  }
  
  function closeEditForm() {
    document.getElementById('editProfileForm').style.display = 'none';
    document.getElementById('dimmedBackground').style.display = 'none';
    document.getElementById('sideNavLeft').style.filter = 'none';
    document.getElementById('mainContent').style.filter = 'none';
    document.getElementById('sideNavRight').style.filter = 'none';
    document.body.style.overflow = 'auto';
  }
  
  function previewCoverPhoto(event) {
    const coverPhoto = event.target.files[0];
    if (coverPhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector('.cover-photo-edit').style.backgroundImage = url(${e.target.result});
             document.querySelector('.cover-photo').style.backgroundImage = url(${e.target.result});
        };
        reader.readAsDataURL(coverPhoto);
    }
  }
  
  function previewProfilePhoto(event) {
    const profilePhoto = event.target.files[0];
    if (profilePhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector('.profile-pic-edit').style.backgroundImage = url(${e.target.result});
             document.querySelector('.profile-pic').style.backgroundImage = url(${e.target.result});
        };
        reader.readAsDataURL(profilePhoto);
    }
  }
  
  function saveChanges() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;
     const website = document.getElementById('website').value;
    closeEditForm();
  }