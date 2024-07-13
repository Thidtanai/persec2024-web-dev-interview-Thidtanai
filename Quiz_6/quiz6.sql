WITH bestProduct2016 AS (
    SELECT 
        p.product_name, 
        SUM(od.quantity) AS sum_quantity
    FROM 
        orders o
    JOIN 
        order_details od ON o.order_id = od.order_id
    JOIN 
        products p ON od.product_id = p.product_id
    WHERE 
        YEAR(o.order_date) = 2016
    GROUP BY 
        od.product_id, p.product_name
    ORDER BY 
        sum_quantity DESC
    LIMIT 5
),
bestProduct2017 AS (
    SELECT 
        p.product_name, 
        SUM(od.quantity) AS sum_quantity
    FROM 
        orders o
    JOIN 
        order_details od ON o.order_id = od.order_id
    JOIN 
        products p ON od.product_id = p.product_id
    WHERE 
        YEAR(o.order_date) = 2017
    GROUP BY 
        od.product_id, p.product_name
    ORDER BY 
        sum_quantity DESC
    LIMIT 5
)
SELECT 
    bp2016.product_name, 
    bp2016.sum_quantity
FROM 
    bestProduct2016 bp2016
JOIN 
    bestProduct2017 bp2017 ON bp2016.product_name = bp2017.product_name;
