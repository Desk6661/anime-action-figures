flowchart LR
    Home[Home Page (Game List)] -->|View Game| Details[Game Details Page]
    Home -->|Add to Cart| Cart[Shopping Cart]
    Details -->|Add to Cart| Cart
    Home -->|Filter/Search| Search[(Search & Filter)]
    Cart -->|Proceed| Checkout[(Checkout - Mock/Optional)]
    
    style Home fill:#add8e6,stroke:#000,stroke-width:1px
    style Details fill:#90ee90,stroke:#000,stroke-width:1px
    style Search fill:#ffff99,stroke:#000,stroke-width:1px
    style Cart fill:#ffb6c1,stroke:#000,stroke-width:1px
    style Checkout fill:#d3d3d3,stroke-dasharray: 5 5
