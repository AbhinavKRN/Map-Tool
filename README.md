## Pin Drop with Remarks

This project allows users to drop pins on a map, add remarks, and automatically fetch the corresponding address using the **Nominatim OpenStreetMap API**. Users can view all saved pins in a list, and the data is persisted using local storage. The project is built with **React** and **Leaflet** for map rendering.

### Features

- **Drop Pins**: Users can click on the map to drop a pin.
- **Add Remarks**: After dropping a pin, users can enter a remark in a form.
- **Fetch Address**: The application uses the Nominatim OpenStreetMap API to fetch the address corresponding to the pin's latitude and longitude.
- **View Saved Pins**: All saved pins are listed in a sidebar with their remarks, addresses, and coordinates.
- **Reset Pins**: Users can reset or clear all saved pins.
- **Responsive Design**: The application is optimized for mobile devices, with a vertical layout and responsive styling.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Leaflet**: Open-source JavaScript library for interactive maps.
- **OpenStreetMap (Nominatim)**: Geocoding service to fetch addresses from latitude and longitude.
- **Local Storage**: Pins and remarks are stored in local storage for persistence across sessions.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AbhinavKRN/Map-Tool.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd Map-Tool
   ```

3. **Install dependencies**:

   Ensure you have **Node.js** and **npm** installed. Then run:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   This will start the application locally at `http://localhost:3000`.

### Usage

1. **Drop a Pin**:
   - Click anywhere on the map to drop a pin.
   - A form will appear where you can enter a remark for the pin.

2. **Fetch Address**:
   - After entering the remark, click "Save Pin." The address corresponding to the pin's coordinates will be fetched and displayed.

3. **View Saved Pins**:
   - All saved pins are visible in the sidebar, showing the remarks, addresses, and coordinates.

4. **Reset Pins**:
   - Use the "Reset Pins" button to clear all saved pins.

### File Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── MapComponent.js  # Main map component with pin drop functionality
│   │   ├── PinForm.js       # Form for entering pin remarks
│   │   ├── PinList.js       # Sidebar for listing saved pins
│   ├── utils
│   │   └── fetchAddress.js  # Utility function to fetch address from OpenStreetMap
│   ├── styles
│   │   └── styles.css       # Styling for the application
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point for the React app
├── .gitignore
├── package.json
├── README.md                # Project documentation
```

### API Usage

The project uses the **Nominatim OpenStreetMap API** for reverse geocoding to fetch addresses based on latitude and longitude. The API endpoint used is:

```
https://nominatim.openstreetmap.org/reverse?format=json&lat={lat}&lon={lng}
```

### License

This project is licensed under the MIT License.
