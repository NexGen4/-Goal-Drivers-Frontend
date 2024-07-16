
create database BudgetPos

use BudgetPos

/*Table for Insert Users' Details*/ 
create table UsersDetails(
UserID char (5) primary key not null, 
FirstName varchar (20), 
LastName varchar (20), 
UserName varchar (20), 
UserPassword varchar (10),
Adress varchar (20),
Email varchar (20),
ContactNo int,
Membership int FOREIGN KEY REFERENCES Membership (Membership_ID) ON UPDATE CASCADE
)

/*Table for Insert Product Details*/ 
create table ProductDetails (
ProductID char (8) primary key not null, 
ProductName varchar (20), 
ProductType varchar (6),
Model varchar (20),
UnitPrice float, 
BaseValue float, 
Quantity int,
Category char (2) FOREIGN KEY REFERENCES ProductCategory (CategoryID) ON UPDATE CASCADE,
SellerID char (5) FOREIGN KEY REFERENCES UsersDetails (UserID) ON UPDATE CASCADE
)

/*Table for Insert Product Category Details*/
create table ProductCategory (
CategoryID char (2) primary key not null,
CategoryName varchar (20)
)

/*Table for Insert Payment Details*/ 
create table PaymentDetails (
Reference_No char (5) primary key not null, 
SellerID char (5) not null,
ProductID char (8),
Amount float,
PaymentType varchar (5),
CustomerID char (5) FOREIGN KEY REFERENCES UsersDetails (UserID) ON UPDATE CASCADE not null,
)

/*Table for Insert Membership Details*/ 
create table Membership (
Membership_ID int primary key not null, 
Membership varchar (10), 
StartPrice float,
EndPrice float,
Members int
)

/*Table for Insert Report Details*/ 
Create table Report (
ReportID char (5) primary key not null,
RequestedDate date
)

/*Table for Insert Meeting Details*/ 
Create table MeetingSchedule (
ScheduleID char (5) primary key not null,
MetingDate date,
MeetingTime time,
SellerID char (5) FOREIGN KEY REFERENCES UsersDetails (UserID) ON UPDATE CASCADE
)

/*Table for Insert Request Panel Details*/ 
Create table Demo ( 
SampleID char (6) primary key not null, 
SampleName varchar (20),
SellerID char (5) FOREIGN KEY REFERENCES UsersDetails (UserID) ON UPDATE CASCADE
)

/*Table for Insert Chat Details*/ 
Create table ChatOption ( 
QuestionNo int primary key not null, 
Question varchar (100), 
Answer varchar (100)
)




