package com.example.primeiroprojeto.controller;

import com.example.primeiroprojeto.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.primeiroprojeto.service.UserService;

@Controller
public class CadastroController {

    public CadastroController(UserService userService) {
        this.userService = userService;
    }

     private final UserService userService;

    @GetMapping("/cadastro")
    public String mostrarFormulario(){
        return "cadastro";
    }

    @PostMapping("/cadastro")
    public String cadastroUsuario(@RequestParam String nome,
                                  @RequestParam String email,
                                  @RequestParam String senha){

        User user = new User(nome, email, senha);
        userService.cadastrarUser(user);

        return "redirect:/cadastro";
    }
}
