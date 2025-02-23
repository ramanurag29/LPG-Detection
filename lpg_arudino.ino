#include <LiquidCrystal.h>
#include <Servo.h>

// Initialize the LCD with the pins
LiquidCrystal lcd(7, 6, 5, 4, 3, 2);

// Define pins for the MQ-2 sensor, motor, and servo
const int mq2Pin = A0;
const int motorPin = 8;
const int servoPin = 9;
Servo exhaustServo;
int gasLevel;

void setup() {
  // Initialize the LCD
  lcd.begin(16, 2);
  
  // Initialize serial communication
  Serial.begin(9600);

  // Set motor pin as output
  pinMode(motorPin, OUTPUT);
  
  // Attach the servo to the servo pin
  exhaustServo.attach(servoPin);
  
  // Set the servo to the initial position
  exhaustServo.write(0);
}

void loop() {
  // Read the gas level from the MQ-2 sensor
  gasLevel = analogRead(mq2Pin);

  // Display gas level on LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Gas Level: ");
  lcd.print(gasLevel);
  lcd.setCursor(0, 1);
  lcd.print("Gas %: ");
  lcd.print(gasLevel / 10.23); // Assuming 10-bit ADC and 0-100% range
  
  // Check if the gas level exceeds 250 PPM
  if (gasLevel > 250) {
    // Turn on the motor using PWM
    analogWrite(motorPin, 255); // Full speed (255)

    // Rotate the servo motor by 90 degrees
    exhaustServo.write(90);
    
    // Display warning on LCD
    lcd.setCursor(10, 1);
    lcd.print("Warning!");
  } else {
    // Turn off the motor
    analogWrite(motorPin, 0);
    
    // Rotate the servo motor back to 0 degrees
    exhaustServo.write(0);
  }

  // Print gas level to serial monitor
  Serial.print("Gas Level: ");
  Serial.println(gasLevel);
  
  // Wait for a second before the next loop
  delay(1000);
}
