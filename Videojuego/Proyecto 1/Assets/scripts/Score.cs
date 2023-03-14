// This script is to keep score of balls getting in the basket 

// Rafael Blanga Hanono 2023-03-01

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Score : MonoBehaviour
{

    [SerializeField] TMP_Text tmpObj;
    [SerializeField] int maxScore;
    [SerializeField] createballs creator;
    int score;
    // Start is called before the first frame update
    void Start()
    {
        score = 0;
    }

    
    public void AddPoints(int amount)
    {
        score += amount;
        tmpObj.text = "Score: " + score;
        //Debug.Log("New score: " + score);

        if (score >= maxScore)
        {
            Finish();

        }
    }

    void Finish()
    {
        
        creator.StopSpawning();
        tmpObj.text += "\n\n YOU WON!!!";
}
}
