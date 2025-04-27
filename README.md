# Dynamic Employee Table

A dynamic employee table built with React and Ant Design that displays employee data, supports filtering, sorting, pagination, CSV export, and more. It also provides detailed calculations like time worked, most efficient employee, and employee with the most time worked.

## Live Demo

- [https://dynamic-employee-table.netlify.app/](https://dynamic-employee-table.netlify.app/)

## Screenshots

![App Screenshot](https://i.ibb.co.com/fYSWzYJP/dynamic-table-mocup.webp)

## **Technologies Used**

- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Ant Design**: A popular React UI library for building responsive layouts.

## **Features**

- **Employee Data Display**: Displays employee data including check-in/out times, units worked, time worked, and efficiency.
- **Dynamic Calculations**:

  - Calculates Time Worked based on Check In and Check Out.
  - Calculates Avg. Sec/Unit dynamically based on Time Worked and No Of Units.
  - Highlights the **Most Efficient Employee** and **Employee with Most Time Worked**.

- **Search and Filter**:

  - Search by **Employee Name** or **Property Name**.
  - Filter by **Single Date** or **Date Range**.
  - Predefined date ranges for **This Week**, **Last Week**, **This Month**, and **Last Month**.

- **Responsive Table**: Automatically adjusts for different screen sizes.
- **CSV Export**: Export the visible data in the table as a CSV file.

## **Features**

- **Personal Details**: Input personal information like name, email, phone, and address.
- **Experience**: Add job positions, companies, durations, and descriptions.
- **Projects**: List projects, including technologies used, descriptions, and links.
- **Academic & Extracurriculars**: Add education and extracurricular activities.

- **Layout Options**: Choose between multiple CV templates (Classic, Modern etc).

- **Customizability**: Choose different colour, font.

- **Download Options**: Download your CV in **PDF** or **DOCX** formats.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/shakilahmedatik/dynamic-employee-table.git
cd dynamic-employee-table
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```bash
http://localhost:5173
```

## **Usage**

### **Table Features:**

- **Search**: Use the search bar to filter employees or properties by name.
- **Date Filter**: Select a date or date range to filter the employee records.
- **Pagination**: The table supports pagination, displaying 20 records per page by default. You can change the page size using the controls at the bottom.
- **Export to CSV**: Click the **Download CSV** button to download the current visible data as a CSV file.

### **Responsive Layout:**

- The table automatically adjusts for different screen sizes. On smaller screens, certain columns like **Check In** and **Check Out** will be hidden to save space.

## **Project Structure**

The project is organized as follows:

    /src
      /components
        Container.jsx    - Wrapper for the table layout
      /data
        dummyData.js     - Contains mock data for the employees
        columnsData.js.  - Contains Table Column data
      /utils
        filterData.js    - Utility for filtering the data based on the search and date range
        processTableData.js - Utility to process and calculate additional fields like Time Worked and Avg. Sec/Unit
        exportCsv.js     - Utility to export the visible table data as a CSV file
        tableSummary.js  - Utility to generate the summary for the table footer
      App.jsx            - Main component containing the table logic
      index.js           - Entry point for the React app
      App.css            - Styling for the application

## **Dependencies**

- react: JavaScript library for building user interfaces.
- antd: Ant Design, a UI component library for React.
- dayjs: A lightweight date library for JavaScript.
- @ant-design/icons: Icons used in the table (for example, CloseOutlined).

## **License**

This project is open-source and available under the [MIT License](LICENSE).
