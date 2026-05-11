package com.example.primeiroprojeto.controller;

import com.example.primeiroprojeto.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public String mostrarLogin(){
        return "login";
    }

    @PostMapping("/login")
    public String fazerLogin(@RequestParam String email,
                             @RequestParam String senha,
                             Model model){


        boolean autenticado = userService.autenticar(email, senha);

        if(autenticado){
            return "redirect:/catalogo";
        }

        model.addAttribute("erro", "Email ou senha invalidos");
        return "login";
    }
}
