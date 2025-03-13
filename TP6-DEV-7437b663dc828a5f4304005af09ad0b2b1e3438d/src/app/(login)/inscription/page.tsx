import { useForm } from '@mantine/form';


import React from 'react';
import { z } from 'zod';
import { Button } from "@arthur.eudeline/starbucks-tp-kit/components/button";
import { SectionContainer } from "@arthur.eudeline/starbucks-tp-kit/components/section-container";
import { Card } from "@arthur.eudeline/starbucks-tp-kit/components/card";
import { TexteInput } from "@arthur.eudeline/starbucks-tp-kit/components/card";
import { PasswordInput } from '@arthur.eudeline/starbucks-tp-kit/components/inputs/password-input';

export default function Page() {
    return (
        <SectionContainer>
            <Card>
                
                <TexteInput label="Nom"
                onChange={() => {}}
                placeholder="Lin Guini..." 
                required
                />
                <TexteInput label="Adresse email">
                onChange={() => {}}
                placeholder="Lin Guini@barilla.it"
                required
                </TexteInput>

                
                <PasswordInput
                    label="Mot de passe"
                    onChange={() => {}}
                    value="Ke$$a"
                    required
                    />
                <Button>inscription</Button>
            </Card>
        </SectionContainer>
    )

    
   
  }