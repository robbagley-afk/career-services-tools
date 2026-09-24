/**
 * versions.js — Single Source of Truth for Ensign Career Services Tools versions
 */
const CES_APP_VERSIONS = {
  "resume-coach-mentor-live": "v1.3",
  "resume-coach-mentor-pilot": "v1.2",
  "ensign-resume-tutor": "v0.8",
  "major-explorer": "v1.0",
  "career-fair": "v1.0",
  "resume-coach": "v1.0",
  "resume-improver": "v1.0",
  "interview-practice": "v1.0",
  "academic-advisor": "v1.0",
  "ens101": "v1.0",
  "linkedin-brewcoach": "v1.0",
  "internship-expert": "v1.0",
  "readiness-hub": "v1.0"
};

document.addEventListener("DOMContentLoaded", () => {
  // Update version tags and button labels/tooltips dynamically
  document.querySelectorAll("[data-app-id]").forEach(card => {
    const appId = card.getAttribute("data-app-id");
    const version = CES_APP_VERSIONS[appId];
    if (!version) return;

    // Update version tag pill if present
    const tag = card.querySelector(".version-tag");
    if (tag) {
      tag.textContent = version;
    }

    // Update card buttons
    const buttons = card.querySelectorAll(".card-actions .btn");
    buttons.forEach(btn => {
      // Set tooltip title
      const currentTitle = btn.getAttribute("title");
      if (!currentTitle) {
        const h3 = card.querySelector("h3");
        const appName = h3 ? h3.textContent.trim() : "App";
        btn.setAttribute("title", `Launch ${appName} (${version})`);
      }

      // If button text doesn't already contain version, format it cleanly
      const text = btn.textContent.trim();
      if (!text.includes("v0.") && !text.includes("v1.") && !text.includes("v2.")) {
        // Replace arrow symbol temporarily to insert version before arrow
        if (text.includes("↗") || text.includes("→")) {
          btn.innerHTML = text.replace(/([↗→])/, `<span class="btn-version">(${version})</span> $1`);
        } else {
          btn.innerHTML = `${text} <span class="btn-version">(${version})</span>`;
        }
      }
    });
  });
});
