package com.groupbuy.backend.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateCampaignRequest(@NotBlank(message = "must not be blank") String title, @NotBlank(message = "must not be blank") String status) {}
