<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Farmer Profile</title>
  <style>
    /* Global & Typography Resets */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    body {
      background-color: #F8FAFC;
      color: #0F172A;
      display: flex;
      justify-content: center;
      min-height: 100vh;
    }

    /* Container matching Mobile ScrollView layout */
    .container {
      width: 100%;
      max-width: 480px;
      background-color: #F8FAFC;
      padding-bottom: 40px;
      overflow-y: auto;
    }

    /* Header Section */
    .header {
      background-color: #1B4332;
      padding: 24px;
      padding-top: 60px;
      padding-bottom: 40px;
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
    }

    .header-title {
      font-size: 32px;
      font-weight: 800;
      color: #FFFFFF;
    }

    .header-sub {
      font-size: 15px;
      color: #86EFAC;
      margin-top: 4px;
    }

    /* Form Card Section */
    .card {
      background-color: #FFFFFF;
      margin: 16px;
      padding: 20px;
      border-radius: 20px;
      margin-top: -20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .label {
      font-size: 12px;
      font-weight: 800;
      color: #1E293B;
      margin-top: 18px;
      margin-bottom: 8px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .input {
      width: 100%;
      border: 1.5px solid #CBD5E1;
      border-radius: 12px;
      padding: 16px;
      font-size: 16px;
      background-color: #FFFFFF;
      color: #0F172A;
      font-weight: 500;
      outline: none;
      transition: border-color 0.2s;
    }

    .input:focus {
      border-color: #22C55E;
    }

    /* Layout Elements */
    .row {
      display: flex;
      gap: 12px;
    }

    .flex-1 { flex: 1; }
    .flex-1-5 { flex: 1.5; }

    /* Gender Custom Buttons */
    .gender-row {
      display: flex;
      gap: 8px;
    }

    .gender-btn {
      flex: 1;
      border: 2px solid #22C55E;
      border-radius: 10px;
      padding: 12px 0;
      text-align: center;
      background-color: #FFFFFF;
      color: #22C55E;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s;
    }

    .gender-btn.active {
      background-color: #22C55E;
      color: #FFFFFF;
    }

    .note {
      font-size: 12px;
      color: #3B82F6;
      margin-top: 6px;
      font-weight: 600;
    }

    /* Soil Grid Layout */
    .soil-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .soil-btn {
      width: calc(50% - 6px); /* 48% style simulation with strict gaps */
      display: flex;
      align-items: center;
      gap: 10px;
      border: 2px solid #E2E8F0;
      border-radius: 12px;
      padding: 14px;
      background-color: #FFFFFF;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s;
    }

    .soil-btn.active {
      border-color: #22C55E;
      background-color: #F0FDF4;
    }

    .dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .soil-text {
      font-size: 14px;
      font-weight: 700;
      color: #1E293B;
    }

    /* Submission Button */
    .save-btn {
      width: 100%;
      background-color: #22C55E;
      color: #FFFFFF;
      border: none;
      padding: 18px;
      border-radius: 14px;
      margin-top: 32px;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 0.5px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(34, 197, 94, 0.3);
      transition: opacity 0.2s;
    }

    .save-btn:hover {
      opacity: 0.9;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="header">
      <h1 class="header-title">Farmer Profile</h1>
      <p class="header-sub">Tell us about you and your farm</p>
    </div>

    <form class="card" id="profileForm" onsubmit="event.preventDefault(); saveProfile();">
      
      <div class="label">Full Name *</div>
      <input type="text" id="name" class="input" placeholder="Enter your name" required>

      <div class="row">
        <div class="flex-1">
          <div class="label">Age</div>
          <input type="number" id="age" class="input" placeholder="Years">
        </div>
        <div class="flex-1-5">
          <div class="label">Gender</div>
          <div class="gender-row">
            <div class="gender-btn active" onclick="selectGender('Male')">Male</div>
            <div class="gender-btn" onclick="selectGender('Female')">Female</div>
            <div class="gender-btn" onclick="selectGender('Other')">Other</div>
          </div>
        </div>
      </div>

      <div class="label">State</div>
      <input type="text" id="state" class="input" value="Telangana">

      <div class="row">
        <div class="flex-1">
          <div class="label">District</div>
          <input type="text" id="district" class="input" placeholder="Enter district">
        </div>
        <div class="flex-1">
          <div class="label">Mandal</div>
          <input type="text" id="mandal" class="input" placeholder="Enter mandal">
        </div>
      </div>

      <div class="label">Village</div>
      <input type="text" id="village" class="input" placeholder="Enter village">

      <div class="label">Land Size (Acres) *</div>
      <input type="number" step="0.01" id="landSize" class="input" placeholder="e.g. 2.40" required>
      <div class="note">Note: 40 Guntas = 1 Acre</div>

      <div class="label">Soil Type *</div>
      <div class="soil-grid">
        <div class="soil-btn" onclick="selectSoil('Black Soil')" data-soil="Black Soil">
          <div class="dot" style="background-color: #2C2C2C;"></div>
          <span class="soil-text">Black Soil</span>
        </div>
        <div class="soil-btn" onclick="selectSoil('Red Soil')" data-soil="Red Soil">
          <div class="dot" style="background-color: #C0392B;"></div>
          <span class="soil-text">Red Soil</span>
        </div>
        <div class="soil-btn" onclick="selectSoil('Alluvial Soil')" data-soil="Alluvial Soil">
          <div class="dot" style="background-color: #F1C40F;"></div>
          <span class="soil-text">Alluvial Soil</span>
        </div>
        <div class="soil-btn" onclick="selectSoil('Laterite Soil')" data-soil="Laterite Soil">
          <div class="dot" style="background-color: #D35400;"></div>
          <span class="soil-text">Laterite Soil</span>
        </div>
      </div>

      <button type="submit" class="save-btn">Save & Start Farming</button>
    </form>
  </div>

  <script>
    // State Tracking (Simulating React's useState)
    let formState = {
      name: '', age: '', gender: 'Male', state: 'Telangana',
      district: '', mandal: '', village: '', landSize: '', soilType: ''
    };

    // Initialize fields with default values
    document.getElementById('state').value = formState.state;

    // Gender Custom Select Logic
    function selectGender(gender) {
      formState.gender = gender;
      document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === gender) btn.classList.add('active');
      });
    }

    // Soil Custom Select Logic
    function selectSoil(soilName) {
      formState.soilType = soilName;
      document.querySelectorAll('.soil-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-soil') === soilName) btn.classList.add('active');
      });
    }

    // Save Data Logic (Simulating AsyncStorage mapping to localStorage)
    function saveProfile() {
      // Gather inputs
      formState.name = document.getElementById('name').value.trim();
      formState.age = document.getElementById('age').value;
      formState.state = document.getElementById('state').value.trim();
      formState.district = document.getElementById('district').value.trim();
      formState.mandal = document.getElementById('mandal').value.trim();
      formState.village = document.getElementById('village').value.trim();
      formState.landSize = document.getElementById('landSize').value;

      // Validation check matching React Native's rule
      if (!formState.name || !formState.landSize || !formState.soilType) {
        alert('Name, Land Size & Soil Type required mowa');
        return;
      }

      // Save using HTML5 localStorage API
      localStorage.setItem('userProfile', JSON.stringify(formState));
      localStorage.setItem('isOnboarded', 'true');

      alert('Profile Saved Successfully mowa! Redirecting...');
      // Simulated routing: window.location.href = '/tabs';
    }
  </script>
</body>
</html>
        
