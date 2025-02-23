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
![Website UI]<img src="https://github.com/user-attachments/assets/bd78249a-c26d-40f0-9884-e9c2944d64a4" width="400px">  

### 📟 LCD Display Readings  
![LCD Display]<img src="https://github.com/user-attachments/assets/28e97938-6c28-4a53-80dd-0e81d7d5ddee" width="400px">

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
