UPDATE Posts
set condition=$2,
    catergory_id=$3,
    price=$4,
    name=$5,
    description=$6,
    image_path=$7
WHERE seller_id = $1 AND id = $8;