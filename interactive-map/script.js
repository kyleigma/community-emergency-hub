// Store the state of each map feature
let mapFeatures = {
    evacuationCenters: false,
    floodProne: false,
    emergencyFacilities: false,
    medicalFacilities: false,
    schools: false,
    sportsVenues: false,
    communityCenters: false
};

// Function to update button active state
function updateButtonState(featureId, button) {
    // Simply add or remove the active class based on the feature state
    // without affecting other buttons
    if (mapFeatures[featureId]) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

// Function to get all active features
function getActiveFeatures() {
    return Object.keys(mapFeatures).filter(feature => mapFeatures[feature]);
}

// Toggle functions for each feature
function toggleEvacuationCenters() {
    const button = document.querySelector('button[onclick="toggleEvacuationCenters()"]');
    mapFeatures.evacuationCenters = !mapFeatures.evacuationCenters;
    updateButtonState('evacuationCenters', button);
    // Add your map logic here
    console.log('Active features:', getActiveFeatures());
}

function toggleFloodProne() {
    const button = document.querySelector('button[onclick="toggleFloodProne()"]');
    mapFeatures.floodProne = !mapFeatures.floodProne;
    updateButtonState('floodProne', button);
    // Add your map logic here
    console.log('Active features:', getActiveFeatures());
}

function toggleEmergencyFacilities() {
    const button = document.querySelector('button[onclick="toggleEmergencyFacilities()"]');
    mapFeatures.emergencyFacilities = !mapFeatures.emergencyFacilities;
    updateButtonState('emergencyFacilities', button);
    // Add your map logic here
    console.log('Active features:', getActiveFeatures());
}

function toggleMedicalFacilities() {
    const button = document.querySelector('button[onclick="toggleMedicalFacilities()"]');
    mapFeatures.medicalFacilities = !mapFeatures.medicalFacilities;
    updateButtonState('medicalFacilities', button);
    // Add your map logic here
    console.log('Active features:', getActiveFeatures());
}

function toggleSchools() {
    const button = document.querySelector('button[onclick="toggleSchools()"]');
    mapFeatures.schools = !mapFeatures.schools;
    updateButtonState('schools', button);
    // Add your map logic here
    console.log('Active features:', getActiveFeatures());
}

function toggleSportsVenues() {
    const button = document.querySelector('button[onclick="toggleSportsVenues()"]');
    mapFeatures.sportsVenues = !mapFeatures.sportsVenues;
    updateButtonState('sportsVenues', button);
    // Add your map logic here
    console.log('Active features:', getActiveFeatures());
}

function toggleCommunityCenters() {
    const button = document.querySelector('button[onclick="toggleCommunityCenters()"]');
    mapFeatures.communityCenters = !mapFeatures.communityCenters;
    updateButtonState('communityCenters', button);
    // Add your map logic here
    console.log('Active features:', getActiveFeatures());
}

// Initialize dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownToggle.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-content')) {
            dropdownContent.classList.remove('show');
        }
    });

    // Initialize all buttons to reflect their initial state
    Object.keys(mapFeatures).forEach(feature => {
        const buttonSelector = `button[onclick="toggle${feature.charAt(0).toUpperCase() + feature.slice(1)}()"]`;
        const button = document.querySelector(buttonSelector);
        if (button) {
            updateButtonState(feature, button);
        }
    });

    // If there's a marker click handler, keep it
    if (typeof marker !== 'undefined') {
        marker.on('click', function() {
            // Remove active class from all markers
            evacuationMarkers.forEach(m => {
                m.marker.getElement().classList.remove('active');
            });
            // Add active class to clicked marker
            this.getElement().classList.add('active');
        });
    }
});