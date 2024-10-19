const fetchAddress = async (lat, lng) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await response.json();
        return data.display_name || 'Address not found';
    } catch (error) {
        console.error('Error fetching address:', error);
        return 'Error fetching address';
    }
};

export default fetchAddress;
