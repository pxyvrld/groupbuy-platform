package com.groupbuy.backend.service;

import com.groupbuy.backend.dto.CampaignDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CampaignService {
    private final List<CampaignDto> campaigns;

    public CampaignService() {
        this.campaigns = List.of(
                new CampaignDto(1L, "Coffee", "DONE"),
                new CampaignDto(2L, "Yerba", "OPEN")
        );
    }

    public List<CampaignDto> findAll() {
        return campaigns;
    }

    public Optional<CampaignDto> findById(Long id) {
        return campaigns.stream()
                .filter(c -> Objects.equals(c.id(), id))
                .findFirst();
    }

}
