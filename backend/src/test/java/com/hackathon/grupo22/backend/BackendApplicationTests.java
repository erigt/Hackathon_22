package com.hackathon.grupo22.backend;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import com.hackathon.grupo22.backend.controllers.AnnouncementRequest;
import com.hackathon.grupo22.backend.controllers.Category;
import com.hackathon.grupo22.backend.persistence.Announcement;
import com.hackathon.grupo22.backend.persistence.AnnouncementRepository;

@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {

        @Autowired
        private MockMvc api;

        @Autowired
        private AnnouncementRepository announcementRepository;

        @Test
        public void testCorrectCreation() {
                AnnouncementRequest request = new AnnouncementRequest(1, "Paseo de perros", "Servicio de paseo...",
                                "tupaseodeperros@gmail.com", 60,
                                "www.image.com/imageOfDog.png", Category.SERVICIO, "Asturias");

                assertEquals(1, request.getId());
                assertEquals("Servicio de paseo...", request.getDescription());
        }

        @Test
        public void returnTittleAnnoucements() throws Exception {
                announcementRepository.saveAll(List.of(
                      new Announcement(1, "Paseo de perros", "Paseamos perritos por zonas verdes y al sol",
                      "tupaseodeperros@gmail.com", 60,
                      "www.google.com/imagendeperro", Category.SERVICIO, "Asturias")  
                ));
                api.perform(get("/announcement"))
                .andExpect(jsonPath("$[0].title", equalTo("Paseo de perros")));

        }

        @Test
        public void returnPriceAnnoucements() throws Exception {
                announcementRepository.saveAll(List.of(
                      new Announcement(1, "Paseo de perros", "Paseamos perritos por zonas verdes y al sol",
                      "tupaseodeperros@gmail.com", 60,
                      "www.google.com/imagendeperro", Category.SERVICIO, "Asturias")  
                ));
                api.perform(get("/announcement"))
                .andExpect(jsonPath("$[0].price", equalTo(60)));

        }

        @Test
        public void returnCategoryAnnoucements() throws Exception {
                announcementRepository.saveAll(List.of(
                      new Announcement(1, "Paseo de perros", "Paseamos perritos por zonas verdes y al sol",
                      "tupaseodeperros@gmail.com", 60,
                      "www.google.com/imagendeperro", Category.SERVICIO, "Asturias")  
                ));
                api.perform(get("/announcement"))
                .andExpect(jsonPath("$[0].category", equalTo("SERVICIO")));

        }

        @Test
        public void returnsTheExistingAnnouncementSpecific() throws Exception {
                announcementRepository.saveAll(List.of(
                                new Announcement(1, "Paseo de perros", "Paseamos perritos por zonas verdes y al sol",
                                                "tupaseodeperros@gmail.com", 60,
                                                "www.google.com/imagendeperro", Category.SERVICIO, "Asturias")));

                api.perform(get("/announcement"))
                                .andExpectAll(
                                                status().isOk(),
                                                jsonPath("$", hasSize(2)),
                                                jsonPath("$[0].title", equalTo("Paseo de perros")),
                                                jsonPath("$[0].description",
                                                                equalTo("Paseamos perritos por zonas verdes y al sol")),
                                                jsonPath("$[0].contact", equalTo("tupaseodeperros@gmail.com")),
                                                jsonPath("$[0].price", equalTo(60)),
                                                jsonPath("$[0].imageUrl", equalTo("www.google.com/imagendeperro")),
                                                jsonPath("$[0].category", equalTo("SERVICIO")),
                                                jsonPath("$[0].location", equalTo("Asturias")));
        }

        @Test
        public void returnsTheExistingAnnouncements() throws Exception {
                announcementRepository.saveAll(List.of(
                                new Announcement(1, "Paseo de perros", "Paseamos perritos por zonas verdes y al sol",
                                                "tupaseodeperros@gmail.com", 60,
                                                "www.google.com/imagendeperro", Category.SERVICIO, "Asturias"),
                                new Announcement(2, "Paseo de gatos", "Paseamos gatitos por tejados y al sol",
                                                "tupaseodeperros@gmail.com", 60,
                                                "www.google.com/imagendegato", Category.PRODUCTO, "Castilla y Leon")));

                api.perform(get("/announcement"))
                                .andExpectAll(
                                                status().isOk(),
                                                jsonPath("$", hasSize(2)),
                                                jsonPath("$[0].title", equalTo("Paseo de perros")),
                                                jsonPath("$[0].description",
                                                                equalTo("Paseamos perritos por zonas verdes y al sol")),
                                                jsonPath("$[0].contact", equalTo("tupaseodeperros@gmail.com")),
                                                jsonPath("$[0].price", equalTo(60)),
                                                jsonPath("$[0].imageUrl", equalTo("www.google.com/imagendeperro")),
                                                jsonPath("$[0].category", equalTo("SERVICIO")),
                                                jsonPath("$[0].location", equalTo("Asturias")),
                                                jsonPath("$[1].title", equalTo("Paseo de gatos")),
                                                jsonPath("$[1].description",
                                                                equalTo("Paseamos gatitos por tejados y al sol")),
                                                jsonPath("$[1].contact", equalTo("tupaseodeperros@gmail.com")),
                                                jsonPath("$[1].price", equalTo(60)),
                                                jsonPath("$[1].imageUrl", equalTo("www.google.com/imagendegato")),
                                                jsonPath("$[1].category", equalTo("PRODUCTO")),
                                                jsonPath("$[1].location", equalTo("Castilla y Leon")));
        }

        @Test
        public void testDeleteAnnouncementById() {
                AnnouncementRequest delete = new AnnouncementRequest(3, "Paseo de perros", "Servicio de paseo...",
                                "tupaseodeperros@gmail.com", 60,
                                "www.image.com/imageOfDog.png", Category.SERVICIO, "Asturias");

                
                assertEquals(3, delete.getId());
                assertEquals("Servicio de paseo...", delete.getDescription());
        }   

}
