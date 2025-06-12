Phase 1: Project Setup & Basic Structure

🔹 Step 1: Initialize Project


🔹 Step 2: Directory Structure

src/
├── components/      # Reusable UI components (Button, ProductCard, etc.)
├── pages/           # Different pages (Home, ProductDetails, Cart, Checkout, Profile)
├── redux/           # Redux setup (store, actions, reducers)
├── context/         # UserContext setup
├── data/            # Mock data (if needed)
├── App.js           # Main app entry point
└── index.js         # Renders App component

Phase 2: Routing & Navigation

    🔹 Step 3:  Implement Routing (React Router)

      Setup react-router-dom in App.js

      Define routes:

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      Add a Navbar with links to Home, Cart, and Profile.


Phase 3: Displaying Products & Search Feature
    🔹 Step 3: Create a ProductList Component

        Display list of products (use mock data or API).

        Implement "Search Bar" (use useState for filtering products).

        Click on a product to navigate to the Product Details Page.

    🔹 Step 4: Implement Product Details Page

        Show product details using the id from URL (useParams).

        Display "Add to Cart" or "Remove from Cart" button using conditional rendering.

        Add a "Go Back" button to return to Home.


