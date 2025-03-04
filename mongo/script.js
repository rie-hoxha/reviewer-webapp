// User Collection
db.createCollection("user", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                email: {
                    bsonType: "string",
                    description: "email address of the user",
                    uniqueItems: true
                },
                password: {
                    bsonType: "string",
                    description: "password of the user"
                },
                username: {
                    bsonType: "string",
                    description: "username of the user",
                    uniqueItems: true
                },
                date_joined: {
                    bsonType: "date",
                    description: "date when the user joined"
                }
            },
            required: ["email", "password", "username", "date_joined"]
        }
    }
});
db.user.createIndex({"username": 1});

// Category Collection
db.createCollection("category", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                name: {
                    bsonType: "string",
                    description: "name of the category"
                },
                description: {
                    bsonType: "string",
                    description: "description of the category"
                },
                type: {
                    bsonType: "string",
                    description: "type of the category"
                }
            },
            required: ["name", "type"]
        }
    }
});

// Product Post Collection
db.createCollection("product_post", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                name: {
                    bsonType: "string",
                    description: "name of the product post"
                },
                price: {
                    bsonType: "decimal",
                    description: "price of the product post"
                },
                description: {
                    bsonType: "string",
                    description: "description of the product post"
                },
                brand: {
                    bsonType: "string",
                    description: "brand of the product post"
                },
                date_posted: {
                    bsonType: "date",
                    description: "date when the product post was posted"
                }
            },
            required: ["name", "price", "date_posted"]
        }
    }
});

// Review Collection
db.createCollection("review", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                rating: {
                    bsonType: "int",
                    description: "rating of the review"
                },
                comments: {
                    bsonType: "string",
                    description: "comments in the review"
                },
                date: {
                    bsonType: "date",
                    description: "date when the review was made"
                },
                post_id: {
                    bsonType: "objectId",
                    description: "foreign key referencing product_post collection"
                }
            },
            required: ["rating", "comments", "date", "post_id"]
        }
    }
});

// Images Collection
db.createCollection("images", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                image_url: {
                    bsonType: "string",
                    description: "URL of the image"
                },
                timestamp: {
                    bsonType: "timestamp",
                    description: "timestamp of when the image was created"
                }
            },
            required: ["image_url"]
        }
    }
});

// User Follows Collection
db.createCollection("user_follows", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                user_1_id: {
                    bsonType: "objectId",
                    description: "foreign key referencing user collection"
                },
                user_2_id: {
                    bsonType: "objectId",
                    description: "foreign key referencing user collection"
                },
                date_followed: {
                    bsonType: "date",
                    description: "date when the user followed another user"
                }
            },
            required: ["user_1_id", "user_2_id", "date_followed"]
        }
    }
});
