function generateRandomColor() {
    // Generate random R, G, and B values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    // Convert decimal to hexadecimal
    var hexR = r.toString(16).padStart(2, '0');
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');
  
    // Concatenate the values to form a hexadecimal color code
    var hexColor = '#' + hexR + hexG + hexB;
  
    return hexColor;
  }
  
  // Example usage:
  var randomColor = generateRandomColor();
  console.log(randomColor);
  