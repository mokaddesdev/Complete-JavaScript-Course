console.log( "data type" );
/*
    - **Primitive Data Types:**
        - String    => Text values ( "Hello" )
        - Number    => Numeric values ( 25, 39 )
        - Boolean   => True/False ( true, false )
        - Undefined => A variable declared but not assigned ( let x )
        - Null      => Represents "nothing" ( let y = null )
        - Symbol    => Unique identifiers ( symbol("id"))
        - Bigint    => Large numbers ( BigInt(1223466878868))

    - **Non-Primitive (Reference) Data Type**
        - Object   => Collection of key value pairs
        - Array    => Ordered list of value store
        - Function => Code that can be executed
 */

let salary, name, department;
salary = null;

let student = {
    name : 'alice',
    age  : 20,
    isEnroll : true,
}
console.log( student.age );
console.log( student.name );
console.log( student.isEnroll );

let array = [ 'Ali', 'Faruk', 'Khalid' ];