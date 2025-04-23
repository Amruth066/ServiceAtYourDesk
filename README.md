Below is an updated `README.md` file that covers both the frontend and backend parts of your "Work at Your Will" project. It includes an overview, technology stack, installation instructions, and details on both the React UI and Spring Boot API with MySQL.

```markdown
# ServiceAtDesk

**ServiceAtDesk** is a full-stack web application that allows clients to find and book service providers for services such as Plumbing, Electrical work, Cleaning, Painting, and more. It features a user-friendly interface, detailed provider profiles, appointment bookings, and real-time chat functionality.

## 🌟 Features

- **Browse Services:** View a list of available services (e.g., Plumbing, Cleaning, Electrical).
- **View Providers:** Explore service providers with detailed profiles including ratings, previous work, and availability.
- **Book Appointments:** Clients can book appointments by selecting date and time slots.
- **Real-Time Chat:** Communicate instantly with service providers using WebSockets.
- **Responsive UI:** Frontend built with React for a smooth user experience.
- **RESTful APIs:** Backend built with Spring Boot and exposed via secure APIs.
- **Persistent Data:** Service and provider data stored in MySQL.
- **Full-Stack Architecture:** 
  - **Frontend:** Built with React.js and custom CSS.
  - **Backend:** Built with Spring Boot exposing REST APIs.
  - **Database:** MySQL stores service and provider data.

## Tech Stack

- **Frontend:** React.js, React Router, Custom CSS
- **Backend:** Java Spring Boot, Spring Data JPA, WebSocket (Java)
- **Database:** MySQL
- **Real-Time Messaging:** Java WebSockets
- **Build Tools:** Maven
- **Version Control:** Git

## Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js (v14 or higher) and npm
- Java (JDK 11 or higher)
- Maven
- MySQL (with MySQL Workbench recommended for managing the database)

## Installation

### Frontend (React UI)

1. **Clone the repository:**

   ```bash
   git clone https://your-repo-url.git
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd work-at-your-will
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open the app in your browser at:**  
   [http://localhost:3000](http://localhost:3000)

### Backend (Spring Boot API)

1. **Navigate to the backend directory:**

   ```bash
   cd service-your-desk-backend
   ```

2. **Configure the database:**  
   In `src/main/resources/application.properties`, update the MySQL connection settings. For example:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/service_at_your_desk?useSSL=false&serverTimezone=UTC
   spring.datasource.username=root
   spring.datasource.password=your_mysql_password
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

   spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```

3. **Run the Spring Boot application:**

   ```bash
   mvn spring-boot:run
   ```

   The backend will start on [http://localhost:8080](http://localhost:8080) and expose APIs (e.g., `/api/services`).

## 💬 Chat Feature (WebSocket)

The application supports real-time chat using Java WebSockets. Once a user selects a service provider, a chat window opens to allow communication in real time.

WebSocket endpoint: /ws-chat

Built using Spring WebSocket with STOMP

Chat messages are exchanged between users and providers for coordination


## Database Setup

The backend uses a MySQL database. Use MySQL Workbench or a similar tool to run the provided SQL scripts to create the necessary tables and insert dummy data.

### Creating Tables & Dummy Data

- **Services Table:**
  ```sql
  CREATE DATABASE IF NOT EXISTS service_at_your_desk;
  USE service_at_your_desk;

  CREATE TABLE IF NOT EXISTS services (
      service_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      base_price DECIMAL(10,2)
  );

  INSERT INTO services (name, description, base_price) VALUES 
  ('Plumbing', 'Professional plumbing services including repair, installation, and maintenance.', 75.00),
  ('Electrical', 'Expert electrical services for residential and commercial properties.', 85.00),
  ('Cleaning', 'Thorough cleaning services for your home or office.', 45.00),
  ('Painting', 'Quality painting services for interiors and exteriors.', 65.00),
  ('Gardening', 'Comprehensive gardening and lawn care services.', 50.00),
  ('Pest Control', 'Effective pest control services.', 80.00),
  ('HVAC', 'Installation, maintenance, and repair of HVAC systems.', 90.00),
  ('Moving', 'Professional moving services for residential and commercial needs.', 60.00),
  ('Landscaping', 'Expert landscaping services to enhance your property aesthetics.', 100.00);
  ```

- **Providers Table:** (Additional dummy data can be inserted similarly as needed.)

  ```sql
  CREATE TABLE IF NOT EXISTS providers (
      provider_id INT AUTO_INCREMENT PRIMARY KEY,
      service_id INT,
      name VARCHAR(100) NOT NULL,
      title VARCHAR(100),
      rating DECIMAL(3,2),
      review_count INT,
      experience VARCHAR(100),
      hourly_rate DECIMAL(10,2),
      availability VARCHAR(50),
      description TEXT,
      previous_work TEXT,
      FOREIGN KEY (service_id) REFERENCES services(service_id)
  );
  
  ```

## 📁 Project Structure
Frontend
components/

context/

App.js

index.js

Backend
controller/

model/

repository/

service/

config/ (includes WebSocket config)

application.properties


```

### Components Overview

- **Header:** Navigation and branding.
- **Services:** Displays all available services fetched from the backend.
- **ServiceProviders:** Lists providers for the selected service.
- **ServiceProviderDetails:** Shows detailed provider info, ratings (pie chart), reviews, and booking options.
- **Footer:** Footer content.

## Usage

1. **Run the Backend:**  
   Start your Spring Boot application using Maven:
   ```bash
   cd service-your-desk-backend
   mvn spring-boot:run
   ```
   Ensure your MySQL database is running and configured.

2. **Run the Frontend:**  
   In a separate terminal, navigate to the frontend directory and run:
   ```bash
   cd work-at-your-will
   npm start
   ```
3. **Browse the App:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

   - **Homepage:** Displays the header, hero section, and services list.
   - **Service Details:** Click a service to view its providers.
   - **Provider Details:** Click a provider to view detailed info and book an appointment.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Follow the coding guidelines and ensure your changes are well documented.


