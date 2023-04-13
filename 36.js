// 36)
// Find maximum profit that can be earned by conditionally selling stocks

// Given a list containing future price predictions of two different stocks for the next n–days, 
// find the maximum profit earned by selling the stocks with a
//  constraint that the second stock can be sold, only if no transaction happened on the previous day for any of the stock.

// Assume that the given prices are relative to the buying price. Each day, we can either sell a single share of the 
// first stock or a single share of the second stock or sell nothing.
// For example,
// Input:
// Day    Price(x)  Price(y)
// 1        5        8
// 2        3        4
// 3        4        3
// 4        6        5
// 5        3        10
// Output: Maximum profit earned is 25
// Explanation:
// Day 1: Sell stock y at a price of 8
// Day 2: Sell stock x at a price of 3
// Day 3: Sell stock x at a price of 4
// Day 4: Don’t sell anything
// Day 5: Sell stock y at a price of 10

let day=[1,2,3,4,5]
let xprice=[5,3,4,6,3]
let yprice=[8,4,3,5,10]



