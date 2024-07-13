SELECT
    p.product_name,
    sum(od.quantity) as sum_quantity
FROM
    orders o
    join order_details od on o.order_id = od.order_id
    join products p on od.product_id = p.product_id
where
    Year (o.order_date) = 2016
group by
    od.product_id
order by
    sum_quantity desc
limit
    5