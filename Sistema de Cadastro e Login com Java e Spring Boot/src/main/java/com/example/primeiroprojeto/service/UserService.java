package com.example.primeiroprojeto.service;

import com.example.primeiroprojeto.model.User;
import org.springframework.stereotype.Service;
import com.example.primeiroprojeto.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void cadastrarUser(User user) {
        userRepository.save(user);
    }

    public boolean autenticar(String email, String senha) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isEmpty()) {
            return false;
        }

        User user = userOptional.get();
        return user.getSenha().equals(senha);
    }
}
