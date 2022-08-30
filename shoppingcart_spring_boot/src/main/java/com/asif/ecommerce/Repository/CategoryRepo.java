package com.asif.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asif.ecommerce.model.Category;

public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
