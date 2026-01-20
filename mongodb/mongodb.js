// No SQL

// sample data -> name, age, id

// if i want to insert the data in sql dbs
// 1. database (dbName)
// 2. table (tableName) -> name (varchar) age(int) id(int)
// e1 => varun, 34, 123
// e2 => ashwin, null, 123
// e3 => sri, 23, 123, sri@gmail.com (not possible)
// because the schema is predefined

// SQL dbs are used when the relation between data is the first priority

// if i want to insert the data in nosql
// ? 1) databse(dbName)
// ? 2) something which is equivalent to table (name) -> optional => collection.
// ? 3) insert data
// ! e1 => name -> varun, age -> 34, id -> 123
// ! e2 => name -> Ashwin, id -> 123
// !e3 => sri, 23, 123, sri@gmail.com, 899088913, sal, ......

// ! because the schema is dynamic

// ? 1.document based => in this data is inserted in form of javascript like objects (bson)
let user1 = {
  name: "varun",
  age: 34,
  email: "v@gmail.com",
  skills: ["html, css"],
};

// ? 2.key value pair -> key value pair database is used in rate - Limiting (ip address), caching (storing the data somewhere from which accessing the data is faster) (they are in memory databases example -> redis)

// ? key value pair => in this data is stored in form of key-value pair and each key-value pair is a separate entity

// ? 3.graph database -> data is stored in the form of nodes, where all the nodes are connected with the help of edges (example => neo4) (used in social media applicaitons like linkedin, instagram)

// ? 4. wide column database / columnar database -> data is getting stored in the form of rows and columns (example -> cassandraDB) (used for ai model training) (used in data analytics)

// * difference between sql and nosql databases

// ! sql
// ? 1) it is static in nature, here structure is predefined
// ? 2) also known as RDBMS
// ? 3) here data is stored in the form of tables (rows and cols)
// ? 4) it is used when the relation b/w data is first priority
// ? 5) using sql dbs, writing complex queries is easy
// ? 6) it supports vertical scaling

// ! no-sql
// ? 1) it is dynamic in nature, here structure is not  predefined (by  default the structure is not defined)
// ? 2) Also known as nonRDBMS
// ?3) here data is stored in form of documents, key-value pairs, graphs, wide columns
// ?4) it is used when the priority is storing / handling large amount of data.
// ?5) writing complex queries is hard.
// ?6) it supports horizontal scaling.
// ?7) examples -> mongodb, cassendradb, neo4j, redisDB.

// ! scaling -> it is a process of altering the specs (RAM, Disk) of the system

let myLaptop = {
  RAM: 8,
  Disk: 512,
};

// ? movies, series, games, etc... (left RAM-512mb, disk-16gb)

// ! 1) delete existing applications and data (this is not allowed)

// ! 2) increase the space (vertical scaling): in this new resources are added to the existing system
let myLaptopUpgraded = {
  RAM: 16,
  Disk: 1024,
};

// !3) buy a new laptop (horizontal scaling) => in this, new resources are added within the existing system

let myNewLaptop = {
  RAM: 8,
  Disk: 1024,
};

// ! highly available and distributed.

// !60k ---> 60k (16, 1024)
// !60k ---> 30k (8, 512)   30k (8, 512)
// ? In case of No SQL Databases, we can basically divide our database

// ? so nosql database is highly available and distributed

// ! =================================== MONGODB ========================
// ? 25 days (basics(compass, mongod server, mongosh), CRUD(commands), operators, aggragation, indexing)

// ! !theory -> (replication, sharding) // System design

// ! mongodb -> it is nosql database which stores data in JSON like format (BSON). It is dynamic in nature (by default there is no schema). It is open source, cross platform.

// ! 1) mongo server / community server

// ! 2) compass

// !3) mongoshell

// ? in laptop we have more than 60,000 ports.

// ? 1) Mongodb compass => it is a graphical user interface, i can create everything visually and manually, there is no need to remember the mongodb commands. Through compass we can interact with the database visually without writing any commands (or knowledge of mongodb commands)

// ? while adding documents using compass, pass the input in JSON Format

// ? 2) mongo shell => CLI (command line interface) (terminal) (through which we can interact (CRUD) with database by typing mongodb commands. It is built using javascript.)

// ! to tap into the shell, open terminal and type "mongosh".
// ! to exit the shell => ctrl + c + c or .exit
// ! net stop mongodb.
// ! net start mongodb.

// ? 3) community (mongodb server) => it is a mongodb server through which we can interact with database, by default it's port number is 27107, complete address will be

// ! mongodb://localhost:27017/ => domain name
// ! mongodb://127.0.0.1:27017/ => Ip Address

// ! ================================ mongodb shell commands

// ? to display all the databases
// ? show dbs or show databases to show all the databases

// ? the default database name is test

// ! 2) to create a database
// ? use database_name

// !3) to create a collection
// ? db.createCollection("collection_name")
// example => db.createCollection("professor")

// ? datatype of dbs => object

// ? new database => temporary it gets stored in the storage engine

// ? 4. to show all the collections => show collections === show tables

// ! show tables => this was introduced to make developers familiar with the command show collections

// ?5) to raname a collection => db.renameCollection("old_name", "new_name")

let db = {
  name: "college",
  createCollection: function () {},
  revoke: function () {},
  professors: {
    // ! professors here is an collection
    renameCollection: function () {},
    drop: function () {},
    document: {},
  },
};

// ? db.professor.renameCollection("newName");

// ? 6) to delete a collection

// ? db.collection_name.drop()
// ? ex => db.professor.drop()

// ! 7) deleting a database

// ? db.dropDatabase()

// ! ============================== CRUD on documents

// ? 8) to insert a single document -> {} (insertOne({}))

// -> js objects, json data

// ! database >> collection >> documents

db.books.insertOne({
  name: "the alchemist",
  author: "Harry potter",
  genre: "novel",
});

// ? {
//  ?  acknowledged: true,
//   ?insertedId: ObjectId('696a02cd194bf20a520d8190')
//  ?}

db.books.insertOne({
  name: "the alchemist",
  author: "Harry potter",
  genre: "novel",
  publishDate: "new Date()",
  publisher: "undefined",
});

db.books.insertOne({
  name: "the alchemist",
  author: "Harry potter",
  genre: "novel",
  publishDate: new Date(),
  publisher: undefined,
});

// ! BSON --> bson stands for binary json (binary javascript object notation)

// ? 1) in this data is stored in binary format.
// ? 2) MongoDB uses bson to store data (conversion done by mongo-shell)
// ? 3) it is not human readable
// ? 4) bson supports various other datatypes like date, functions, undefined and along with that other data types like objectId.

// ! geoJSON => for using the co-ordinates in the mongoDB

// ! objectId => It is a 12 bytes hexadecimal string of type objectId.

// ? 1) it is unique for each document.
// ? 2) whenever a new document is inserted, mongoDb automatically assigns an _id to that document, unless we explictly assigns _id to that document
// ? 3) also acts as a unique id

db.books.insertOne({
  name: "the child",
  _id: "12345",
});

db.books.insertOne({
  name: "the child",
  _id: 12345,
});

// ! this _id is divided into three parts (4, 5, 3)

// ? date.now() => jan 1970 => epoch => time stamp
// ? 1) first 4 bytes ----> time stamps
// ? 2) next 5 bytes ----> PUI (Process unique identifier) (2)processId + machineId(3)
// ? 3) last 3 bytes ----> counter, starts at random value and increments by 1 for each document inserted
// ? 4) this is immutable.
// ? _id is immutable

// ! --------------------------- 19 Jan, 2026 --------------------------------------

// ? Inserting the multiple documents => (insertMany([]))
// ?db.collection_name.insertMany([{doc1}, {doc2}, {doc3}, ..])

db.books.insertMany([
  { name: "the killling", author: "JK Rowling" },
  { name: "Atomic Habits", author: "James Clear" },
]);

// ? to fetch/read single document -> findOne(), we will paas 3 arguments in it
db.collection_name.findOne({ filterCondition }, { projection }, { options });

// ! All the argumets are not mandatory

// ? 1) { filterCondition } => here we pass the condition on which we need to filter out the documents

// ! display the details of user whose name is "Smith"
db.collection_name.findOne({ name: "Smith" });

db.books.findOne({ name: "the alchemist" });

// ! when no conditions are passed the first document is fetched

db.sampleData.insertMany([
  {
    name: "Ashwin",
    age: 34,
    sal: 34000,
    gender: "m",
  },
  {
    name: "Ashwini",
    age: 33,
    sal: 44000,
    gender: "f",
  },
  {
    name: "Sri",
    age: 31,
    sal: 30000,
    gender: "m",
  },
  {
    name: "Sirisha",
    age: 35,
    sal: 39000,
    gender: "f",
  },
]);

db.sampleData.findOne({ name: "Ashwini" });
db.sampleData.findOne({ gender: "f" });

// ? 2) {projection} => using projection, we can display/hide fields in the output, while using projection, _id will displayed by default

// ! if i have to show name only.
// ! and hide the _id, we use _id : 0
db.sampleData.findOne({ gender: "f" }, { name: 1, _id: 0 });

// ? to fetch / read multiple documents -> find(): it returns me the array of documents which will be matched

db.collection_name.find();

// ! display the names and sal of all the male employees
db.sampleData.find({ gender: "m" }, { name: 1, sal: 1 });

// ! it returns me the array of all documents present in that collection
db.sampleData.find();
db.sampleData.find({});

// ! ================= Note ========= find() method returns a cursor (pointer) -> object

// ? Deleting the document (you can't roll back, once deleted, it's deleted)

// ? to delete a single document -> deleteOne(): this will delete the first matched document

db.collection_name.deleteOne({ filterCondition });

db.collection_name.deleteOne({}); // ? when no conditions are passed, the first document is deleted

db.collection_name.deleteOne(); // ! this will give you an error => arguments required.

db.sampleData.deleteOne({ gender: "m" }); // ? it will basically delete the first matched document

// ! to delete multiple documents => deleteMany(): this will delete all the matched documents.

db.collection_name.deleteMany({ filterCondition });

db.collection_name.deleteMany({}); // ? all the documents will be deleted from the collection

// ! 9) to update a single document -> updateOne(): this will update the first matched document

// ? db.collection_name.updateOne({filter}, {updation value}, {options})

db.collection_name.updateOne({}, { updationValue }, { options }); // ? first document in the collection would be updated

// ! ======================= operators =================================

// ? All operators in mongoDb starts with $ symbol

// ! OPERATORS -> these are the reserved symbols which are used to perform the operations

// ! 2 + 3 -> + = operator, 2, 3 => operands

// ! 1) comparison operators
// ? less than ============ $lt
// ? less than or equal to ======================== $lte
// ? greater than or equal to ======================$gte
// ? greater than ===================== $gt
// ? equals to ==================== $eq
// ? not equals to ================= $ne
// ! syntax for above 6 operators are same
// ! filter object ====> { fieldName: {$op: value}}

// ! Q => get the details of all the employees whose age is less than 32

db.sampleData.find({ age: { $lt: 32 } });

db.sampleData.find({ name: { $eq: "Sri" } });

// ? in ============================= $in
// ? not in =================================== $nin

// ! ================================ 20 Jan, 2026 =========================================

// ? download the json file provided in group

// ! mongo tools => for writing the queries in the form of commands

// ! mongoimport "path of json file to import" -d databaseName -c collectionName --jsonArray => for importing the json data not visually,but by using the commandLine.

// ! Chrome => mongo tools download.

// ! Q display all the employee names having salary more than 2000

// ? db.emp.find({{sal: $gt: 2000}}, {empName: 1, _id: 0, sal: 1})

// ! Q => display all the emp names who are working in department 10 and department

// ! $in
// ? filter object ====> {fieldName: {$in/nin: ["v1", "v2", "v3", ......]}}
// ? $in will fetch all the documents, which will match any one of the given values v1, v2...

// ? $nin will fetch all the documents, which fails to fulfill any one of the given values v1, v2...

db.emp.find(
  {
    deptNo: { $in: [10, 20] },
  },
  {
    // show the deptNo.
    deptNo: 1,
    // do'not show the id
    _id: 0,
  },
);

// ! $nin
db.emp.find(
  {
    // 10, 20 ko chod ke sab print ho jayega!!
    deptNo: { $nin: [10, 20] },
  },
  {
    // show the deptNo.
    deptNo: 1,
    // do'not show the id
    _id: 0,
  },
);

// ! explicit and implicit

db.sampleData.deleteOne({ gender: "m" }); // implicit use of $eq
db.sampleData.deleteOne({ gender: { $eq: "m" } }); // explicit use of $eq

// ! two ways for creating a collection

db.createCollection();
db.collection_name.insertMany();

// ? Both will work perfectly fine..

// ! display all the emp details who are working as clerk in department 10

// ? Case 1 when we apply multiple conditions on different fields => all the conditions are getting fulfilled , so I can say it is working like logical and.

db.emp.find(
  {
    // ? first condition
    job: "clerk",
    // ? second condition
    deptNo: 10,
  },
  {
    job: 1,
    deptNo: 1,
    _id: 0,
  },
);

// ! display all the emp details who are having sal in between  1000 and 2000
// ? Case 2 => when we apply multiple conditions on same field => only the last condition will work
db.emp.find(
  {
    // ? first condition
    sal: { $gt: 1000 },
    // ? second condition
    sal: { $lt: 2000 },
  },
  {
    sal: 1,
  },
);

// job: clerk will be override by the job: manager
db.emp.find({
  job: "clerk",
  depNo: 20,
  job: "manager",
});

// ! Logical Operators (logical AND, Logical OR etc ...)

// !  these 3 have same syntax
// ? and ==========================> $and
// ? or ===========================> $or
// ? nor ==========================> $nor
// ? filter object ===>
// ? { $and : [{c1}, {c2}, {c3}, ....]}

// ! Logical and => this will fetch all the documents, which fulfills all the given conditions

// ! display
db.emp.find(
  {
    $and: [
      // ! condition 1
      { job: "clerk" },
      // ! condition 2
      { deptNo: { $eq: 10 } },
    ],
  },
  {
    job: 1,
    deptNo: 1,
  },
);

// ? not ===========================> $not
