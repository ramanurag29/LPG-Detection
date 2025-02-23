# 🔥 LPG Gas Detection & Prevention System  

## 📌 Overview  
This project was developed as part of a **Summer Research Internship at GGSIPU**. Our team tackled the **serious issue of gas leakages in India** by developing a hardware-based detection and prevention system using **Arduino** and **ESP8266**. The system efficiently detects gas leaks, categorizes their severity, and provides **real-time alerts via LEDs, buzzers, and notifications using Blynk**.

---

## ⚙️ Working of the Project  
1. **Gas Detection:**  
   - The **MQ-2 gas sensor** detects gas levels in **PPM (Parts Per Million)**.  
   - It determines different gas levels, such as **80, 120, 150 PPM, etc.**.  

2. **Severity Classification:**  
   - The system classifies gas levels into categories:  
     - ✅ **Safe Zone** (Low PPM)  
     - ⚠️ **Warning Zone** (Moderate PPM)  
     - 🚨 **Danger Zone** (High PPM)  

3. **Alert System:**  
   - When the gas level **exceeds a set threshold**, the system activates:  
     - 🔴 **LED Alert:** Indicates danger.  
     - 📢 **Buzzer Alert:** Starts beeping.  
     - 📩 **ESP8266 Notification:** Sends a message via **Blynk** (email/SMS).  

4. **Automated Prevention:**  
   - The system controls **exhaust fans** and **regulators** to **stop further gas leakage**.  

---

## 🌐 Website Functionality  
Alongside the hardware system, we developed a **web-based dashboard** to monitor the LPG gas levels.  
- 📡 **Live Gas Level Monitoring**  
- 🔔 **Alerts Display**  
- ⚙️ **Automated Prevention Controls (Exhaust & Regulator)**  
- 📞 **Emergency Contact Button**  

---

## 📸 Project Screenshots  
### 🖥️ Web Interface  
![Website UI](https://github.com/user-attachments/assets/b59c0404-f71c-45cb-b86c-e42d36fd4806)  

### 📟 LCD Display Readings  
![LCD Display](https://github.com/user-attachments/assets/e110d3a0-b5b4-4749-b28b-8e30e04cd946)  

---

## 🛠️ Technologies Used  
- **Hardware:** Arduino, ESP8266, MQ-2 Gas Sensor, LEDs, Buzzer, Servo Motors  
- **Software:** Arduino IDE, Blynk App, HTML, CSS, JavaScript  

---

## 🚀 Future Enhancements  
🔹 **Automated MCB Shut-off** in case of severe leakage  
🔹 **Battery Backup for Exhaust Fan**  
🔹 **Mobile App Integration for Alerts**  

---

## 📌 Team & Contributors  
This project was developed during our **Summer Research Internship at GGSIPU** by our dedicated team.  
