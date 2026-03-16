package com.groupbuy.backend.service;

import com.groupbuy.backend.dto.CampaignDto;

import java.util.List;
import java.util.Optional;

public class CampaignService {
    private final List<CampaignDto> campaigns;

    public CampaignService(List<CampaignDto> campaigns) {
        this.campaigns = campaigns;
    }

    public List<CampaignDto> getCampaigns() {
        return campaigns;
    }

    public List<CampaignDto> findAll() {
        return campaigns;
    }

    public CampaignDto findById(Long id) {
        return Optional<CampaignDto>;
    }

}
