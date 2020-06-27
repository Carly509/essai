const addCommas = (val) => val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export { addCommas }