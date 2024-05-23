# Application As-Is Requirement Document

## Functionality Breakdown:

1. **User Login**: The application allows users to login using a username and password.

2. **User Level Access**: The application provides different access levels to users. The user levels include:
   - Level 0: Access to Customers, Suppliers, Products, Orders, Invoices, Accounting, and User Accounts panels.
   - Level 1: Access to Customers, Suppliers, Products, Orders, Invoices, and Accounting panels.
   - Level 2: Access to Invoices panel.
   - Level 3: Access to Products panel.

3. **Order Management**: The application allows for the creation, display, and management of orders. The key functionalities include:
   - Displaying a list of orders in a table format.
   - Filtering orders based on selected criteria.
   - Handling mouse click events on the list to display detailed information about an order.
   - Providing an interface to create a new order.

## Key API Functions and Parameters:

1. **Order.java**
   - `setProducts(ArrayList<Product> products)`: Sets the list of products in an order.
   - `setSupplier(Supplier supplier)`: Sets the supplier for an order.
   - `setOrderQuantity(String orderQuantity)`: Sets the quantity of an order.
   - `setOrderID(String orderID)`: Sets the ID of an order.
   - `setOrderDeliveryDate(String orderDeliveryDate)`: Sets the delivery date of an order.
   - `setOrderCost(String orderCost)`: Sets the cost of an order.
   - `setOrderOutstanding(boolean isOrderOutstanding)`: Sets the status of an order.
   - `setOrderDate(String orderDate)`: Sets the date of an order.
   - `setOrderDescription(String orderComment)`: Sets the description of an order.
   - `addProductToOrder(Product product)`: Adds a product to an order.
   - `removeProductFromOrder(Product product)`: Removes a product from an order.

2. **OrderListPanel.java**
   - `buildPanel(JPanel panel, Database database, OrderListPanel orderPane, AccountingPanel accountingPane, ProductListPanel productPane)`: Sets up the panel with the required components.
   - `resetTextFields()`: Resets the text fields on the panel.
   - `actionPerformed(ActionEvent e)`: Handles the action events on the panel.

## UI Layout:

1. **Login Panel**: Contains fields for username and password, a login button, and labels for user login and error messages.

2. **Tabbed Pane**: Contains different panels (Customers, Suppliers, Products, Orders, Invoices, Accounting, User Accounts) depending on the user level.

3. **Order List Panel**: Contains a table for displaying a list of orders, filter options, a button for creating a new order, and a dynamic panel for displaying detailed information about an order.

Please note that this is a high-level overview based on the provided code. A more detailed analysis may require access to additional code files and resources.
