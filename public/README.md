🗑️ Smart-Garbage Management System

Smart-Garbage is a role-based web application designed to modernize municipal garbage management by enabling citizens to report waste, admins to verify & assign tasks, and collectors to resolve issues efficiently using real-time updates and notifications.

This system focuses on reducing fake complaints, improving response time, and bringing transparency to city cleanliness operations

Key Highlights

✔ Evidence-based reporting (Photo + GPS)

✔ Auto confidence & verification scoring

✔ Admin-controlled task assignment

✔ Real-time collector notifications

✔ Call & WhatsApp complaint support

✔ Analytics dashboard & charts

✔ Multilingual support (English & Kannada)

🧑‍💻 System Roles & Features

👤 Citizen

* Submit garbage complaints using:

📸 Camera / image upload

📍 GPS (Google Maps)

📝 Landmark & description

* Auto-generated confidence score

* Track report status:

1.Pending

2.Assigned

3.Resolved

* View past submissions

* Language switch: English / Kannada


🧑‍💼 Admin

* View all reports in real-time

* Verify reports using:

* Evidence score

* Crowd verification

* Call / WhatsApp verification

* Assign reports to collectors manually

* Add complaints received via:

   * 📞 Phone calls

   * 📱 WhatsApp

* Analytics dashboard:

📊 Daily reports

* 🟡 Pending vs 🟢 Resolved

🚛 Collector performance

* Open exact report location in Google Maps


🚛 Collector

* View only assigned reports

* Receive instant notifications when work is assigned

* Open location directly in Google Maps

* Mark reports as resolved

* Resolution automatically updates admin dashboard


🔔 Notification System

* Admin assigns report → collector gets real-time notification

* Notifications stored per collector in Firebase

* Read / unread status supported


🧠 Smart Verification & Confidence Logic

Each report is scored automatically based on:

Factor	                     Score

Image evidence	              +30

GPS location	              +30

Description & landmark	      +40

Multiple citizens reporting	  Bonus


Verification Status:

* verified → High confidence

* verified_by_crowd → Multiple reports

* verified_by_call → Admin call/WhatsApp

* pending_review → Needs admin review

❗ Low confidence reports are not auto-rejected — admin decides.


📊 Dashboard Analytics

Doughnut chart: Pending vs Resolved

Bar chart: Reports per day

Bar chart: Collector performance

Live updates using Firebase listeners

🛠️ Tech Stack

Layer	           Technology

Frontend	HTML, Tailwind CSS, JavaScript

Backend	    Firebase Realtime Database

Auth	    Firebase Authentication

Storage	    Firebase Storage

Charts	    Chart.js

Maps	    Google Maps

Effects	    Three.js


📂 Project Structure

Smart-Garbage/

│
├── index.html          # Login & landing page

├── citizen.html        # Citizen dashboard

├── admin.html          # Admin dashboard

├── collector.html     # Collector dashboard

├── lang.js             # Language translations

├── style.css           # Global styles

├── images/             # Logos & assets

└── README.md           # Project documentation



🌐 Language Support

* English

* Kannada

🚀 Future Enhancements

* AI-based garbage image validation

* Area-wise automatic collector assignment

* Push notifications (mobile)

* Heat-map for garbage-prone zones

* SLA tracking for response time

* Progressive Web App (PWA)

👩‍💻 Developers

Team : Code - Rebels

1.Snehabharathi U
2nd Year ISE ,Dr.Ambedkar Institute OF Technologoy, Bengaluru

2.Teja M
2nd Year ISE ,Dr.Ambedkar Institute OF Technologoy, Bengaluru

3.Suchitra M
2nd Year ISE ,Dr.Ambedkar Institute OF Technologoy, Bengaluru

4.Varshitha Gowda H
2nd Year ISE ,Dr.Ambedkar Institute OF Technologoy, Bengaluru
