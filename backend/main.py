from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import sqlite3
import os
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel
import json

app = FastAPI(title="PO Followup System", version="1.0.0")

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modèles de données
class Account(BaseModel):
    name: str
    description: Optional[str] = None

class Project(BaseModel):
    name: str
    account_id: int
    description: Optional[str] = None

class Category(BaseModel):
    name: str
    description: Optional[str] = None

class Item(BaseModel):
    description: str
    category_id: int

# Routes de l'API
@app.get("/")
async def root():
    return {"message": "PO Followup System API"}

@app.get("/dashboard/data")
async def get_dashboard_data():
    # Simulation de données pour le dashboard
    return {
        "received_po": 150,
        "paid_po": 85,
        "weekly_data": [25, 30, 45, 50, 35, 40, 55],
        "monthly_data": [150, 200, 175, 225, 250, 300, 275, 320, 350, 375, 400, 425],
        "quarterly_data": [800, 950, 1100, 1250],
        "yearly_data": [4100],
        "aging_data": {
            "within_15_days": 25,
            "15_to_30_days": 30,
            "30_to_60_days": 45,
            "60_to_90_days": 20,
            "90_to_120_days": 15,
            "120_to_365_days": 10,
            "more_than_1_year": 5
        }
    }

@app.post("/accounts/")
async def create_account(account: Account):
    # Ici, normalement on enregistrerait en base de données
    return {"message": "Account created successfully", "account": account}

@app.get("/accounts/")
async def get_accounts():
    # Simulation de données existantes
    return [
        {"id": 1, "name": "Account Huawei", "description": "Main account"},
        {"id": 2, "name": "Account SCS", "description": "Secondary account"}
    ]

@app.post("/projects/")
async def create_project(project: Project):
    return {"message": "Project created successfully", "project": project}

@app.post("/categories/")
async def create_category(category: Category):
    return {"message": "Category created successfully", "category": category}

@app.post("/items/")
async def create_item(item: Item):
    return {"message": "Item created successfully", "item": item}

@app.post("/upload/po")
async def upload_po_file(file: UploadFile = File(...)):
    try:
        # Sauvegarde du fichier
        file_location = f"uploads/{datetime.now().strftime('%Y%m%d_%H%M%S')}_{file.filename}"
        with open(file_location, "wb+") as file_object:
            file_object.write(file.file.read())
        
        # Traitement du fichier (simulation)
        # En production, on utiliserait pandas pour lire et traiter le fichier Excel/CSV
        
        return {"message": "File uploaded successfully", "filename": file.filename}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/upload/acceptance")
async def upload_acceptance_file(file: UploadFile = File(...)):
    try:
        # Même logique que pour l'upload PO
        file_location = f"uploads/{datetime.now().strftime('%Y%m%d_%H%M%S')}_{file.filename}"
        with open(file_location, "wb+") as file_object:
            file_object.write(file.file.read())
        
        return {"message": "File uploaded successfully", "filename": file.filename}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)