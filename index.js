// Add your Circle class here
class Circle {
  constructor(radius) { 
  this.radius = radius; 
  } 
  
  get diameter() { 
    return this.radius * 2; 
  } 
  
  set diameter(newDiameter) { 
    this.radius = this.diameter / 2(newDiameter); 
  } 
  
  get circumference() { 
    return this.diameter * Math.PI; 
  } 
  
  set circumference(newCircumference) { 
    this.diameter = this.circumference / Math.PI(newCircumference)
  } 
} 