1. SELECT * FROM Customers
2.SELECT FirstName FROM Customers
3.SELECT FirstName FROM Customers
WHERE CustomerID=1;
4.UPDATE Customers
SET FirstName = 'Lerato', LastName= 'Mabitso'
WHERE CustomerID = 1;
5.DELETE FROM Customers
WHERE CustomerID = 2;
6.SELECT COUNT(OrderID), Status
FROM Orders
GROUP BY Status;
7.SELECT MAX(Amount)
FROM Payments; 
8.SELECT *
FROM Customers
ORDER BY Country;
9.SELECT * FROM Products
WHERE BuyPrice BETWEEN 100 AND 600;
10.SELECT * FROM Customers
WHERE Country = 'Germany' AND City = 'Berlin';
11.SELECT * FROM Customers
WHERE City IN('Cape Town', 'Durban');
12.SELECT * FROM Products
WHERE BuyPrice > 500;
13.SELECT SUM(Amount)
FROM Payments;
14.SELECT COUNT(Status)
FROM Orders
WHERE Status = 'Shipped';
15.SELECT AVG(BuyPrice), AVG(BuyPrice)*12
FROM Products;
16.SELECT *
FROM Payments
INNER JOIN Customers
ON Payments.CustomerID = Customers.CustomerID;
17.SELECT * FROM Products
WHERE Description LIKE '%Turnable front wheels%';