package com.groupbuy.backend.service;

import com.groupbuy.backend.dto.CampaignDto;
import com.groupbuy.backend.dto.CreateCampaignRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CampaignService {
    private final List<CampaignDto> campaigns;
    private long nextId = 3;

    public CampaignService() {
        this.campaigns = new ArrayList<>();
        campaigns.add(new CampaignDto(1L, "Coffee", "DONE"));
        campaigns.add(new CampaignDto(2L, "Yerba", "OPEN"));
    }

    public List<CampaignDto> findAll() {
        return campaigns;
    }

    public Optional<CampaignDto> findById(Long id) {
        return campaigns.stream()
                .filter(c -> Objects.equals(c.id(), id))
                .findFirst();
    }

    public CampaignDto create(CreateCampaignRequest request) {
        CampaignDto created = new CampaignDto(nextId++, request.title(), request.status());
        campaigns.add(created);
        return created;
    }

    public boolean deleteById(Long id) {
        return campaigns.removeIf(c -> Objects.equals(c.id(), id));
    }

}
