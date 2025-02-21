Below is an updated `README.md` file that covers both the frontend and backend parts of your "Work at Your Will" project. It includes an overview, technology stack, installation instructions, and details on both the React UI and Spring Boot API with MySQL.

```markdown
# Work at Your Will

"Work at Your Will" is a full-stack web application that allows clients to hire service providers based on the service they need. Clients can browse a list of services (such as Plumbing, Electrical, Cleaning, etc.), view a list of available providers for each service, and see detailed profiles (including ratings, reviews, and previous work). Clients can also book appointments with providers through the app.

## Features

- **Services Listing:** Browse a list of services (e.g., Plumbing, Electrical, Cleaning, Painting, Gardening, etc.).
- **Service Providers:** View a list of providers for each service.
- **Provider Details:** Each provider has a detailed profile with ratings, reviews, previous work, and booking options.
- **Appointment Booking:** Book an appointment by selecting a date and time slot.
- **Full-Stack Architecture:** 
  - **Frontend:** Built with React.js and custom CSS.
  - **Backend:** Built with Spring Boot exposing REST APIs.
  - **Database:** MySQL stores service and provider data.

## Tech Stack

- **Frontend:** React.js, React Router, Custom CSS
- **Backend:** Java Spring Boot, Spring Data JPA
- **Database:** MySQL
- **Build & Dependency Management:** Maven
- **Deployment:** (e.g., GitHub Pages for frontend; cloud/server for backend)
- **Version Control:** Git (hosted on GitHub, Bitbucket, etc.)

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

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.js
│   │   ├── Services/
│   │   │   └── Services.js
│   │   ├── ServiceProviders/
│   │   │   └── ServiceProviders.js
│   │   ├── ServiceProviderDetails/
│   │   │   └── ServiceProviderDetails.js
│   │   ├── Footer/
│   │   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── service-your-desk-backend/  (Spring Boot backend)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/serviceyourdesk/
│   │   │   │       ├── ServiceAtYourDeskBackendApplication.java
│   │   │   │       ├── controller/
│   │   │   │       │   └── ServiceController.java
│   │   │   │       └── model/
│   │   │   │           └── ServiceEntity.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml
└── package.json
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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Explanation

- **Overview:** Provides a full description of the project, including both frontend and backend details.
- **Features & Tech Stack:** Lists what the application does and the technologies used.
- **Installation:** Step-by-step instructions for setting up the frontend, backend, and database.
- **Database Setup:** Includes SQL scripts to create and populate the services table.
- **Project Structure:** Outlines the directory layout for both the React frontend and Spring Boot backend.
- **Usage:** Explains how to run and test the application.
- **Contributing & License:** Guidance for contributions and licensing.

