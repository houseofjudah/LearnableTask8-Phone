class Telephone {
    constructor() {
      this.phoneNumbers = new Map();
      this.observers = [];
    }
  
    addPhoneNumber(contactName, phoneNumber) {
      this.phoneNumbers.set(contactName, phoneNumber);
      this.notifyObservers(contactName, phoneNumber);
    }
  
    removePhoneNumber(contactName) {
      this.phoneNumbers.delete(contactName);
    }
  
    dialPhoneNumber(contactName) {
      const phoneNumber = this.phoneNumbers.get(contactName);
      if (phoneNumber) {
        this.notifyObservers(contactName, phoneNumber);
      } else {
        console.log(`Phone number with contactName "${contactName}" not found.`);
      }
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(o => o !== observer);
    }
  
    notifyObservers(contactName, phoneNumber) {
      this.observers.forEach(observer => observer.update(contactName, phoneNumber));
    }
  }
  
  class Observer {
    constructor(name) {
      this.name = name;
    }
  
    update(contactName, phoneNumber) {
      console.log(`${this.name}: Dialing ${contactName} (${phoneNumber}).`);
    }

    
  }
  
  const telephone = new Telephone();
  const observer1 = new Observer('Phone Number Printer');
  const observer2 = new Observer('Dialer');
  
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  
  telephone.addPhoneNumber('Home', '091567890');
  telephone.addPhoneNumber('Office', '09587654321');
  telephone.dialPhoneNumber('Home');
  telephone.dialPhoneNumber('Office');
  telephone.dialPhoneNumber('Mobile');



 