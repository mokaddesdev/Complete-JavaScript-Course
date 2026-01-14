export const person = () => {
   return {
     name : 'Mokaddes Ali',
    age : 25,
    city : 'Dhaka',
    printInfo : ( data ) => {
        // console.log( `${this.name} age is ${this.age}` );
        // console.log(`His city ${this.city}`);
        //! Arrow function this not use
        console.log( `${data.name} age is ${data.age}` );
        console.log(`His city ${data.city}`);
    }
   }
}